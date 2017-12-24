/**
 * exported ResultsLog
 *
 * What the user touches/clicks to trigger a dice roll.
 *
 **/

/*jshint unused:false*/

var React = require('react');
var PropTypes = require('prop-types'); // ES5 with npm
var createReactClass = require('create-react-class');

exports.ResultsLog = createReactClass({

	propTypes: {
		log: PropTypes.arrayOf(PropTypes.string)
	},

	getDefaultProps: function () {
		return {
			log: []
		};
	},

	render: function () {

		// Format log entries for disply in HTML.
		var formattedLog = [];
		for (var i = 0; i < this.props.log.length; i++) {
			formattedLog.push(this.props.log[i] + '\n');
		}

		/*jshint ignore:start*/
		return (
			<div className="resultsLog">
				<pre className="resultsLog__output">
					{formattedLog}
				</pre>
			</div>
		);
		/*jshint ignore:end*/
	}

});