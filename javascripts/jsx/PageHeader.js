/**
 * exported PageHeader
 *
 * A page header component.
 *
 * @jsx React.DOM
 **/

var React = require('react');

exports.PageHeader = React.createClass({

	propTypes: {
		title: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			title: 'PageHeader title'
		};
	},
	
	render: function () {
		/*jshint ignore:start*/
		return (
			<h1 className="pageHeader">
				{this.props.title}
			</h1>
		);
		/*jshint ignore:end*/
	}

});