/**
 * exported DiceyApp
 *
 * The main application component.
 *
 **/

/*jshint unused:false*/

const RESULT_LOG_SPACE = '---';

var React = require('react');
var PropTypes = require('prop-types'); // ES5 with npm
var createReactClass = require('create-react-class');

// React app components.
var PageHeader = require('./PageHeader').PageHeader;
var DiceBar = require('./DiceBar').DiceBar;
var ResultModal = require('./ResultModal').ResultModal;
var ResultsActions = require('./ResultsActions').ResultsActions;
var ResultsLog = require('./ResultsLog').ResultsLog;

// Helper libraries
var DiceyUtils = require('../DiceyUtils').DiceyUtils;
var rpgDiceRoller = require('rpg-dice-roller');
// var diceRoller = new rpgDiceRoller.DiceRoller();

exports.DiceyApp = createReactClass({

	/**
	 * http://facebook.github.io/react/docs/reusable-components.html
	 */
	propTypes: {
		pageTitle: PropTypes.string,
		initialResultsLog: PropTypes.arrayOf(PropTypes.string),
		initialLatestResult: PropTypes.object,
		diceGroups: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
	},

	getInitialState: function () {
		return {
			resultsLog: this.props.initialResultsLog,
			latestResult: this.props.initialLatestResult || {
				timeStamp: '',
				dieString: '',
				dieResult: ''
			}
		};
	},

	render: function () {
		/*jshint ignore:start*/
		return (

			<div className="diceyApp">

				<PageHeader title={this.props.pageTitle} version={this.props.appVersion}/>

				<div className="container">

					<div className="row mainRow">
						<div className="col-xs-2 col-sm-2 text-left mainRowLeft">
							<DiceBar name="left" diceGroups={this.props.diceGroups.slice(0, 1)} onDieRoll={this.handleDieRoll}/>
						</div>
						<div className="col-xs-8 col-sm-8 mainRowCenter">
							<ResultsActions
								onResultsClear={this.handleResultsLogClear}
								onResultsSpace={this.handleResultsLogSpace}
							/>
							<ResultsLog log={this.state.resultsLog} />
						</div>
						<div className="col-xs-2 col-sm-2 text-right mainRowRight">
							<DiceBar name="right" diceGroups={this.props.diceGroups.slice(1, 2)} onDieRoll={this.handleDieRoll}/>
						</div>
					</div>

				</div>

				<ResultModal
					timeStamp={this.state.latestResult.timeStamp}
					dieResult={this.state.latestResult.dieResult}
					dieString={this.state.latestResult.dieString}
				/>

				<footer className="text-center">
					<a href="https://github.com/ScottMaclure/dicey">Fork me on GitHub</a>
				</footer>

			</div>
		);
		/*jshint ignore:end*/
	},

	/**
	 * User has rolled a die.
	 */
	handleDieRoll: function (die) {

		var resultsLog = this.state.resultsLog;

		// Generate a nice, readable timestamp, using zero-padding.
		var timeStamp = DiceyUtils.getFormattedTimestamp(new Date());

		// Use the dice rolling library, formatted into a standard string.
		var rollData = new rpgDiceRoller.DiceRoll(die);
		
		// Old library
		// var dieResult = DiceyUtils.getDieResultFromDroll(rollData);
		// var newLogLine = timeStamp + ' ' + die + ': ' + dieResult;
		
		// New library
		var dieResult = `${rollData}`
		var newLogLine = `${timeStamp} ${rollData}`

		resultsLog.unshift(newLogLine);

		this.setState({
			resultsLog: resultsLog,
			latestResult: {
				timeStamp: timeStamp,
				dieString: die,
				dieResult: dieResult
			}
		});

		// API
		this.props.onResultsLogUpdate(newLogLine);

	},

	handleResultsLogClear: function () {

		this.setState({
			resultsLog: [],
			latestResult: {
				timeStamp: '',
				dieString: '',
				dieResult: ''
			}
		});

		// API
		this.props.onResultsLogClear();

	},

	handleResultsLogSpace: function () {

		this.state.resultsLog.unshift(RESULT_LOG_SPACE);
		this.setState({
			resultsLog: this.state.resultsLog,
			latestResult: {
				timeStamp: '',
				dieString: '',
				dieResult: ''
			}
		});

		// API
		this.props.onResultsLogUpdate(RESULT_LOG_SPACE);

	}

});