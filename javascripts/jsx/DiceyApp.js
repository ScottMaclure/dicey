/**
 * exported DiceyApp
 *
 * The main application component.
 *
 * @jsx React.DOM
 **/

/*jshint unused:false*/

var React = require('react');
var PageHeader = require('./PageHeader.js').PageHeader;

exports.DiceyApp = React.createClass({

	propTypes: {
		pageTitle: React.PropTypes.string
	},

	getDefaultProps: function () {
		return {
			pageTitle: 'Welcome to Dicey!'
		};
	},

	render: function () {
		/*jshint ignore:start*/
		return (
			<PageHeader title={this.props.pageTitle}/>
		);
		/*jshint ignore:end*/
	}
	
});