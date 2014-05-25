/**
 * exported DiceyApp
 *
 * The main application component.
 *
 * @jsx React.DOM
 **/

/*jshint unused:false*/

var React = require('react');
var PageHeader = require('./PageHeader.js').PageHeader;
var DiceBar = require('./DiceBar.js').DiceBar;

exports.DiceyApp = React.createClass({

	render: function () {
		/*jshint ignore:start*/
		return (
			<div className="container">
				<div className="diceyApp">
					<PageHeader title={this.props.pageTitle}/>
					<DiceBar dice={this.props.dice}/>
				</div>
			</div>
		);
		/*jshint ignore:end*/
	}
	
});