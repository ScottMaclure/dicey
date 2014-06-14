/**
 * exported ResultsLog
 *
 * What the user touches/clicks to trigger a dice roll.
 *
 * @jsx React.DOM
 **/

/*jshint unused:false*/

var React = require('react');

exports.ResultsLog = React.createClass({

	propTypes: {
		log: React.PropTypes.arrayOf(React.PropTypes.string)
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