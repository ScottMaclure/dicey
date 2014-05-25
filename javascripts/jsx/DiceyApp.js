/**
 * exported DiceyApp
 *
 * The main application component.
 *
 * @jsx React.DOM
 **/

/*jshint unused:false*/

var React = require('react');

// React app components.
var PageHeader = require('./PageHeader.js').PageHeader;
var DiceBar = require('./DiceBar.js').DiceBar;
var ResultsLog = require('./ResultsLog.js').ResultsLog;

// Helper libraries
var RollDice = require('../RollDice.js').RollDice;

exports.DiceyApp = React.createClass({

	getInitialState: function () {
		return {
			resultsLog: []
		};
	},

	componentWillMount: function () {
		this.setState({
			resultsLog: this.props.resultsLog
		});
	},

	render: function () {
		/*jshint ignore:start*/
		return (
			<div className="container">
				<div className="diceyApp">
					<PageHeader title={this.props.pageTitle}/>
					<DiceBar dice={this.props.dice} onDieRoll={this.handleDieRoll}/>
					<ResultsLog log={this.state.resultsLog}/>
				</div>
			</div>
		);
		/*jshint ignore:end*/
	},

	/**
	 * User has rolled a die.
	 */
	handleDieRoll: function (die) {	
		
		var resultsLog = this.state.resultsLog;
		var now = new Date();

		var timeStamp = [
			'[',
			now.getHours(),
			':',
			now.getMinutes(),
			':',
			now.getSeconds(),
			']'
		].join('');

		resultsLog.push(timeStamp + ' ' + die + ': ' + RollDice.roll(die));

		this.setState({ resultsLog: resultsLog });

	}
	
});