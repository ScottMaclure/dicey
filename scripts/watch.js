/**
 * npm run watch - script to regen app and service-worker.
 * TODO browserify/watchify only listens to app js. More?
 */

const fs = require('fs'),
	path = require('path'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	babelify = require('babelify'),
	uglifyify = require('uglifyify'),
	uglifyjs = require('uglify-js');
	envify = require('envify'),
	swPrecache = require('sw-precache');

// Disable sourcemaps for now, etc.
var isDebugMode = process.env.NODE_ENV === 'development';
var buildNumber = 0;

var b = browserify({
		entries: [
			path.join('javascripts', 'dicey.js'),
			path.join('javascripts', 'firebase.js')
		],
		// sourcemaps
		debug: isDebugMode,
		cache: {},
		packageCache: {},
		plugin: [watchify]
	})
	.on('update', bundle);

function formatTimestamp(d) {
	return '[' + d.toLocaleString() + ']';
}

function log(msg) {
	console.log(formatTimestamp(new Date()), msg);
}

function bundle() {

	buildNumber++

	var start = Date.now();
	log('[Build ' + buildNumber + '] [isDebugMode=' + isDebugMode + '] watch.js: bundle task running...');

	generateBundle().on('finish', () => {

		// TODO Switch to https://parceljs.org/

		generateServiceWorker().then(() => {
			log('watch.js: complete in ' + ((Date.now() - start) / 1000) + 's');
			log('---');
		}).catch(function (err) {
			log('ERROR generating service-worker!');
		});

	});

}

/**
 * Rebuild ReactJS app and package for client browser.
 * @return {stream.Writable} https://nodejs.org/api/stream.html#stream_class_stream_writable
 */
function generateBundle() {
	log('generateBundle...');
	return b
	.transform('babelify', {presets: ['@babel/react']})
	.transform('envify')
	.transform('uglifyify', {global: true})
	.bundle()
	.on('error', (err) => {
		log(err.message);
		console.log('argv:', process.argv)
		this.emit('end');
	})
	// .pipe(uglifyjs.minify)
	.pipe(fs.createWriteStream(path.join('public', 'bundle.js')))
	.on('finish', () => {
		log('generateBundle done.');
	});
}


/**
 * @return {Promise} Promise when finished.
 */
function generateServiceWorker() {
	log('generateServiceWorker...');
	return swPrecache.write(path.join('public', 'service-worker.js'), {
		staticFileGlobs: ['public' + '/**/*.{js,html,css,png,jpg,gif}'],
		stripPrefix: 'public'
	}).then(function () {
		log('generateServiceWorker done.');
	});
}

// Kick things off to start.
bundle();
