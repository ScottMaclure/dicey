/**
 *
 * TODO Currently using hard-coded actions. No need for dynamic actions or anything yet.
 * 
 * @jsx React.DOM
 */

var React = require('react');

exports.ResultsActions = React.createClass({

	render: function () {

		/*jshint ignore:start*/
		return (
			<div className="resultsActions">
				<ul className="nav nav-pills">
					<li><a href="#" onClick={this.props.onResultsClear}>Clear</a></li>
					<li><a href="#" onClick={this.props.onResultsSpace}>Space</a></li>
				</ul>
			</div>
		);
		/*jshint ignore:end*/

	}

});