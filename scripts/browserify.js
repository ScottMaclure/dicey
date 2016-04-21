var fs = require('fs'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	babelify = require('babelify');

// Disable sourcemaps for now, etc.
// var isDebugMode = process.env.NODE_ENV === 'development';
var isDebugMode = false;

var b = browserify({
		entries: ['./javascripts/dicey.js'],
		// sourcemaps
		debug: isDebugMode,
		verbose: true,
		cache: {},
		packageCache: {},
		plugin: [watchify]
	}).on('update', bundle);

function bundle() {
	console.log('browserify+babelify running...');
	b.transform('babelify', {presets: ['react']})
	.bundle()
	.pipe(fs.createWriteStream('public/bundle.js'));
}

// Kick things off.
bundle();