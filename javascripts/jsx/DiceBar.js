/**
 * exported DiceBar
 *
 * What the user touches/clicks to trigger a dice roll.
 *
 **/

/*jshint unused:false*/

var React = require('react');
var PropTypes = require('prop-types'); // ES5 with npm
var createReactClass = require('create-react-class');

exports.DiceBar = createReactClass({

	propTypes: {
		name: PropTypes.string,
		dice: PropTypes.arrayOf(PropTypes.object)
	},

	getDefaultProps: function () {
		return {
			name: 'SomeDiceBar',
			dice: []
		};
	},

	handleClick: function (event) {
		// For now, use the button text as the die to roll, eg "1d4".
		// var die = event.target.textContent;
		this.props.onDieRoll(event.target.getAttribute('die'))
	},

	render: function () {

		var self = this;

		var diceGroups = self.props.diceGroups.map(function (diceGroup, groupsIndex) {

			var currentGroup = diceGroup.map(function (die, index) {
				/*jshint ignore:start*/
				return (
					<button
						key={self.props.name + index}
						type="button"
						className={'btn ' + (die.cssClass || 'btn-info')}
						onClick={self.handleClick}
						die={die.die}
					>{die.title || die.die}</button>
				);
				/*jshint ignore:end*/
			});

			/*jshint ignore:start*/
			return (
				<div key={self.props.name + groupsIndex} className="btn-group-vertical btn-group-sm">
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