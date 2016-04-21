/**
 * exported DiceyApp
 *
 * The main application component.
 *
 **/

/*jshint unused:false*/

var React = require('react');

// React app components.
var PageHeader = require('./PageHeader').PageHeader;
var DiceBar = require('./DiceBar').DiceBar;
var ResultModal = require('./ResultModal').ResultModal;
var ResultsActions = require('./ResultsActions').ResultsActions;
var ResultsLog = require('./ResultsLog').ResultsLog;

// Helper libraries
var DiceyUtils = require('../DiceyUtils').DiceyUtils;
var droll = require('droll');

exports.DiceyApp = React.createClass({

	/**
	 * http://facebook.github.io/react/docs/reusable-components.html
	 */
	propTypes: {
		pageTitle: React.PropTypes.string,
		resultsLog: React.PropTypes.arrayOf(React.PropTypes.string),
		latestResult: React.PropTypes.object,
		diceGroups: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.object))
	},

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

			<div className="diceyApp">

				<PageHeader title={this.props.pageTitle}/>

				<div className="container">

					<div className="row mainRow">
						<div className="col-xs-2 col-sm-2 text-left mainRowLeft">
							<DiceBar diceGroups={this.props.diceGroups.slice(0, 1)} onDieRoll={this.handleDieRoll}/>
						</div>
						<div className="col-xs-8 col-sm-8 mainRowCenter">
							<ResultsActions
								onResultsClear={this.handleResultsClear}
								onResultsSpace={this.handleResultsSpace}
							/>
							<ResultsLog log={this.state.resultsLog} />
						</div>
						<div className="col-xs-2 col-sm-2 text-right mainRowRight">
							<DiceBar diceGroups={this.props.diceGroups.slice(1, 2)} onDieRoll={this.handleDieRoll}/>
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

		// Use droll library, format into a standard string.
		var rollData = droll.roll(die);
		var dieResult = DiceyUtils.getDieResultFromDroll(rollData);

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
		this.setState({
			resultsLog: this.state.resultsLog,
			latestResult: {
				timeStamp: '',
				dieString: '',
				dieResult: ''
			}
		});
	}

});