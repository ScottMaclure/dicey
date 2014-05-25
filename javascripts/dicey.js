// Main dicey application.

// Load libraries.
var React = require('react');

var diceyApp = require('./build/DiceyApp.js').DiceyApp;

// TODO Load from JSON file?
var data = {
	pageTitle: 'Dicey! The die rolling app.'
}

React.renderComponent(
	diceyApp(data),
	document.getElementById('diceyApp')
);