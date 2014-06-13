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

		// Flip the log and render in reverse-chronological order.
		var formattedLog = [];
		for (var i = 0; i < this.props.log.length; i++) {
			formattedLog.push(this.props.log[i] + '\n');
		}
		// var formattedLog = this.props.log.reverse().map(function (log) {
		// 	return log + '\n';
		// });

		/*jshint ignore:start*/
		return (
			<div className="resultsLog">
				
				<div className="row">
					<div className="col-xs-12">
						<ul className="nav nav-pills">
      						<li><a href="#" onClick={this.props.onResultsClear}>Clear</a></li>
      						<li><a href="#" onClick={this.props.onResultsSpace}>Space</a></li>
    					</ul>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12">
						<pre className="resultsLog__output">
							{formattedLog}
						</pre>
					</div>
				</div>

			</div>
		);
		/*jshint ignore:end*/
	}

});