/**
 * Like Object.keys, but for values.
 */
function objectValues(obj) {
	return Object.keys(obj).map(function (key) {
		return obj[key];
	});
}

var Firebase = require('firebase');
var diceyFirebase = new Firebase('https://dicey.firebaseio.com/');
var resultsLogRef = diceyFirebase.child('resultsLog');

// Listen for Firebase updates.
resultsLogRef.on('value', function (snapshot) {
	// TODO Change resultsLog to array of objects, rather than array of strings.
	var values = objectValues(snapshot.val()).reverse();
	diceyApp.state.resultsLog = values;
	diceyApp.setState(diceyApp.state);
});

// Listen for new results log.
//resultsLogRef.push('This is another line: ' + new Date().toLocaleFormat());
document.addEventListener('dicey.onResultsLogUpdate', function (event) {
	resultsLogRef.push(event.detail, function () {
		diceyFirebase.child('resultsLog/0').remove();
	});
});

document.addEventListener('dicey.onResultsLogClear', function () {
	resultsLogRef.set({
		0: 'Tap a die to roll...'
	});
});