/**
 *
 * TODO Currently using hard-coded actions. No need for dynamic actions or anything yet.
 *
 */

var React = require('react');
var createReactClass = require('create-react-class');

exports.ResultsActions = createReactClass({

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