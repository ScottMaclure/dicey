/**
 * exported PageHeader
 *
 * A page header component.
 *
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
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">
							<img alt="Brand" src="images/logo-192.png" width="20" height="20"/>
							<span>{this.props.title}</span>
						</a>
					</div>
				</div>
			</nav>
		);
		/*jshint ignore:end*/
	}

});