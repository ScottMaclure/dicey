// Main dicey application.

// Load libraries.
var React = require('react');

var diceyApp = require('./build/DiceyApp.js').DiceyApp;

// TODO Load from JSON file? From LocalStorage?
var data = {
	pageTitle: 'Dicey, a die roller.',
	dice: [
		'1d4', '1d6', '2d6', '1d8', '1d10', '1d12', '1d20', '1d100'
	],
	resultsLog: []
};

React.renderComponent(
	diceyApp(data),
	document.getElementById('appContainer')
);