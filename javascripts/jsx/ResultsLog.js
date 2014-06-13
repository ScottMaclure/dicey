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

		var logEntries = this.props.log.reverse().map(function (log) {
			return log + '\n';
		});

		/*jshint ignore:start*/
		return (
			<div className="resultsLog">
				<pre className="resultsLog__output">
					{logEntries}
				</pre>
			</div>
		);
		/*jshint ignore:end*/
	}

});