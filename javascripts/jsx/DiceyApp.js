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
var ResultModal = require('./ResultModal.js').ResultModal;
var ResultsActions = require('./ResultsActions.js').ResultsActions;
var ResultsLog = require('./ResultsLog.js').ResultsLog;

// Helper libraries
var RollDice = require('../RollDice.js').RollDice;

exports.DiceyApp = React.createClass({

	getInitialState: function () {
		return {
			resultsLog: [],
			latestResult: {
				timeStamp: '',
				dieString: '',
				dieResult: ''
			}
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

					<div className="row">
						<div className="col-xs-3">
							&nbsp;
						</div>
						<div className="col-xs-9">
							<ResultsActions
								onResultsClear={this.handleResultsClear}
								onResultsSpace={this.handleResultsSpace}
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-3">

							<DiceBar dice={this.props.dice} onDieRoll={this.handleDieRoll}/>

						</div>
						<div className="col-xs-9">

							<ResultsLog log={this.state.resultsLog} />

						</div>
					</div>

				</div>

				<ResultModal
					timeStamp={this.state.latestResult.timeStamp}
					dieResult={this.state.latestResult.dieResult}
					dieString={this.state.latestResult.dieString}
				/>

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

		// Generate a nice, readable timestamp, using zero-padding.
		var timeStamp = [
			'[',
			RollDice.zeroPad(now.getHours(), 2),
			':',
			RollDice.zeroPad(now.getMinutes(), 2),
			':',
			RollDice.zeroPad(now.getSeconds(), 2),
			']'
		].join('');

		var dieResult = RollDice.roll(die);

		resultsLog.unshift(timeStamp + ' ' + die + ': ' + dieResult);

		this.setState({
			resultsLog: resultsLog,
			latestResult: {
				timeStamp: timeStamp,
				dieString: die,
				dieResult: dieResult
			}
		});

	},

	handleResultsClear: function () {
		this.setState({
			resultsLog: [],
			latestResult: {
				timeStamp: '',
				dieString: '',
				dieResult: ''
			}
		});
	},

	handleResultsSpace: function () {
		this.state.resultsLog.unshift('---');
		this.setState({ resultsLog: this.state.resultsLog });
	}

});