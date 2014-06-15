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
var DiceyUtils = require('../DiceyUtils.js').DiceyUtils;
var droll = require('droll');

exports.DiceyApp = React.createClass({

	/**
	 * http://facebook.github.io/react/docs/reusable-components.html
	 */
	propTypes: {
		pageTitle: React.PropTypes.string,
		resultsLog: React.PropTypes.arrayOf(React.PropTypes.string),
		latestResult: React.PropTypes.object,
		diceGroups: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string))
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
			<div className="container">

				<div className="diceyApp">

					<PageHeader title={this.props.pageTitle}/>

					<div className="row">
						<div className="col-xs-3 col-md-1">
							&nbsp;
						</div>
						<div className="col-xs-9 col-md-11">
							<ResultsActions
								onResultsClear={this.handleResultsClear}
								onResultsSpace={this.handleResultsSpace}
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-3 col-md-1">

							<DiceBar diceGroups={this.props.diceGroups} onDieRoll={this.handleDieRoll}/>

						</div>
						<div className="col-xs-9  col-md-11">

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

		// Generate a nice, readable timestamp, using zero-padding.
		var timeStamp = DiceyUtils.getFormattedTimestamp(new Date());

		// Use droll library, format into a standard string.
		var rollData = droll.roll(die);
		var dieResult = DiceyUtils.getDieResultFromDroll(rollData);
		var logEntry = timeStamp + ' ' + die + ': ' + dieResult;

		resultsLog.unshift(logEntry);

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