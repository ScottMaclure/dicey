// Main dicey application.

// Load libraries.
var React = require('react');
var ReactDOM = require('react-dom');
var DiceyApp = require('./jsx/DiceyApp').DiceyApp;

// Emit for firebase to catch.
window.diceyData.onResultsLogUpdate = function (logLine) {
	document.dispatchEvent(new CustomEvent(
		'dicey.onResultsLogUpdate', { detail: logLine }
	));
};

// Emit for firebase to catch.
window.diceyData.onResultsLogClear = function () {
	document.dispatchEvent(new CustomEvent('dicey.onResultsLogClear'));
}

// https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
ReactDOM.render(
	<DiceyApp {...window.diceyData} />,
	document.getElementById('appContainer'),
	function () {
		// FYI ReactDOM.render, may/will be async in future.
		window.diceyApp = this;
	}
);