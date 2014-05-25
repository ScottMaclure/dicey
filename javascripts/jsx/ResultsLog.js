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

	render: function () {
		/*jshint ignore:start*/
		return (
			<div className="resultsLog">
				
				<h2>Results</h2>

				<div className="row">
					<div className="col-xs-12">
						<pre className="resultsLog__output">
							TODO...
						</pre>
					</div>
				</div>

			</div>
		);
		/*jshint ignore:end*/
	}

});