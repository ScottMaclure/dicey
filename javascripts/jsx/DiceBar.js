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

		// FIXME Why isn't there a simpler way to pass dynamic properties for clicks?
		var die = $(this.getDOMNode()).find('[data-reactid="' + arguments[1] + '"]').text();
		
		this.props.onDieRoll(die);
	},

	render: function () {

		var diceButtons = this.props.dice.map(function (die) {
			/*jshint ignore:start*/
			return (
				<button 
					type="button" 
					className="btn btn-xs btn-primary"
					onClick={this.handleClick}
				>{die}</button>
			);
			/*jshint ignore:end*/
		}.bind(this));

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