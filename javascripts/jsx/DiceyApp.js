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
var ResultsLog = require('./ResultsLog.js').ResultsLog;

exports.DiceyApp = React.createClass({

	render: function () {
		/*jshint ignore:start*/
		return (
			<div className="container">
				<div className="diceyApp">
					<PageHeader title={this.props.pageTitle}/>
					<DiceBar dice={this.props.dice} onDieRoll={this.handleDieRoll}/>
					<ResultsLog/>
				</div>
			</div>
		);
		/*jshint ignore:end*/
	},

	/**
	 * User has rolled a die.
	 */
	handleDieRoll: function (die, xhr) {
		console.debug('handleDieRoll, die:', die);
	}
	
});