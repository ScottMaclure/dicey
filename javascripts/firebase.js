/**
 * https://firebase.google.com/docs/web/setup
 */

 const firebase = require("firebase");

/**
 * Like Object.keys, but for values.
 */
function objectValues(obj) {
	return Object.keys(obj).map(function (key) {
		return obj[key];
	});
}

var firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBSJ1yBP0fu_JqaurSA3EaBs4X8AJc_PdI",
	authDomain: "dicey.firebaseapp.com",
	databaseURL: "https://dicey.firebaseio.com",
	projectId: "firebase-dicey",
	storageBucket: "firebase-dicey.appspot.com",
	messagingSenderId: "1089485055417"
})
var firebaseDatabase = firebaseApp.database()
console.log('firebaseDatabase:', firebaseDatabase)

var resultsLogRef = firebaseDatabase.ref('resultsLog');

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
		firebaseDatabase.ref('resultsLog/0').remove();
	});
});

document.addEventListener('dicey.onResultsLogClear', function () {
	resultsLogRef.set({
		0: 'Tap a die to roll...'
	});
});