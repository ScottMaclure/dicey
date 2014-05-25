/**
 * exported DiceBar
 *
 * What the user touches/clicks to trigger a dice roll.
 *
 * @jsx React.DOM
 **/

/*jshint unused:false*/

var React = require('react');

exports.DiceBar = React.createClass({

	propTypes: {
		dice: React.PropTypes.arrayOf(React.PropTypes.string)
	},

	getDefaultProps: function () {
		return {
			dice: []
		};
	},

	handleClick: function () {
		console.debug('handleClick, arguments:', arguments);
		this.props.onDieRoll('1dTest');
	},

	render: function () {

		var self = this;

		var diceButtons = this.props.dice.map(function (die) {
			/*jshint ignore:start*/
			return (
				<button 
					type="button" 
					className="btn btn-xs btn-primary"
					onClick={self.handleClick}
				>
						{die}
				</button>
			);
			/*jshint ignore:end*/
		});

		/*jshint ignore:start*/
		return (
			<div className="diceBar">
				<div className="row">
					<div className="col-xs-12">
						{diceButtons}
					</div>
				</div>
			</div>
		);
		/*jshint ignore:end*/

	}

});