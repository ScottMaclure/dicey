/**
 * npm run watch - script to regen app and service-worker.
 * TODO browserify/watchify only listens to app js. More?
 */

const fs = require('fs'),
	path = require('path'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	babelify = require('babelify'),
	babelMinify = require('babel-minify'),
	swPrecache = require('sw-precache'),
	execSync = require('child_process').execSync;

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
		// minifyBundle()

		generateServiceWorker().then(() => {
			log('watch.js: complete in ' + ((Date.now() - start) / 1000) + 's');
			log('---');
		}).catch(function (err) {
			log('ERROR generating service-worker!');
		});

	});

}

function minifyBundle() {
	log('Minifying...')
	stdout = execSync('npm run minify')
	log('Minifying complete, stdout:', stdout)
}

/**
 * Rebuild ReactJS app and package for client browser.
 * @return {stream.Writable} https://nodejs.org/api/stream.html#stream_class_stream_writable
 */
function generateBundle() {
	log('generateBundle...');
	return b
	// TODO use env for dev/prod builds.
	// TODO How to use minify preset?
	// .transform('babelify', {presets: ['react', 'minify']})
	.transform('babelify', {presets: ['react']})
	.bundle()
	.on('error', (err) => {
		log(err.message);
		console.log('argv:', process.argv)
		this.emit('end');
	})
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
