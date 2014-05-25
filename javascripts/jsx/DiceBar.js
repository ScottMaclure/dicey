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

	render: function () {

		var diceButtons = this.props.dice.map(function (die) {
			/*jshint ignore:start*/
			return (
				<button type="button" class="btn btn-lg btn-primary">{die}</button>
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