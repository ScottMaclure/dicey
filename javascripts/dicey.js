// Main dicey application.

// Load libraries.
var React = require('react');
var ReactDOM = require('react-dom');

var DiceyApp = require('./jsx/DiceyApp').DiceyApp;

// TODO Load from JSON file? From LocalStorage?
var data = {
	pageTitle: 'Dicey, now with Zocchi.',
	diceGroups: [
		[
			'1d3',
			'1d4',
			'1d5',
			'1d6',
			'1d7',
			'1d8',
			'1d10',
			'1d12',
			'1d14',
			'1d16',
			'1d20',
			'1d24',
			'1d30',
			'1d100'
		],
		[
			'2d6',
			'3d6',
			'4d6',
			'2d10',
			'11d10'
		]
	],
	resultsLog: []
};

ReactDOM.render(
	<DiceyApp {...data} />,
	document.getElementById('appContainer')
);