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
			{die: '1d3'},
			{die: '1d5'},
			{die: '1d7'},
			{die: '1d10'},
			{die: '1d14'},
			{die: '1d20', cssClass: 'btn-success'},
			{die: '1d100', cssClass: 'btn-success'},
			{die: '2d6', cssClass: 'btn-success'},
			{die: '2d10'}
		],
		[
			{die: '1d4'},
			{die: '1d6'},
			{die: '1d8'},
			{die: '1d12'},
			{die: '1d16'},
			{die: '1d24'},
			{die: '1d30'},
			{die: '3d6'},
			{die: '4d6'},
			{die: '11d10'}
		]
	],
	resultsLog: []
};

ReactDOM.render(
	<DiceyApp {...data} />,
	document.getElementById('appContainer')
);