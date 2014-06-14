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

		var self = this;

		var diceGroups = self.props.diceGroups.map(function (diceGroup) {

			var currentGroup = diceGroup.map(function (die) {
				/*jshint ignore:start*/
				return (
					<button
						type="button"
						className="btn btn-primary"
						onClick={self.handleClick}
					>{die}</button>
				);
				/*jshint ignore:end*/
			});

			/*jshint ignore:start*/
			return (
				<div className="btn-group-vertical btn-group-lg">
					{currentGroup}
				</div>
			);
			/*jshint ignore:end*/

		});

		/*jshint ignore:start*/
		return (
			<div className="diceBar">
				<div className="btn-toolbar" role="toolbar">
					{diceGroups}
				</div>
			</div>
		);
		/*jshint ignore:end*/

	}

});