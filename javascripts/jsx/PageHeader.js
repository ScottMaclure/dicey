/**
 * exported PageHeader
 *
 * A page header component.
 *
 **/

var React = require('react');
var PropTypes = require('prop-types'); // ES5 with npm
var createReactClass = require('create-react-class');

exports.PageHeader = createReactClass({

	propTypes: {
		title: PropTypes.string,
		version: PropTypes.string
	},

	getDefaultProps: function () {
		return {
			title: 'PageHeader title'
		};
	},

	render: function () {
		/*jshint ignore:start*/
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">
							<img alt="Brand" src="images/logo-192.png" width="20" height="20"/>
							<span>{this.props.title}  {this.props.version}</span>
						</a>
					</div>
				</div>
			</nav>
		);
		/*jshint ignore:end*/
	}

});