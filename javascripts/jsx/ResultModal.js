/**
 * @jsx React.DOM
 */

var React = require('react');

exports.ResultModal = React.createClass({

	/**
	 * Invoked immediately after updating occurs. This method is not called for the initial render.
	 */
	componentDidUpdate: function (prevProps, prevState) {

		// Trigger Bootstrap's modal functionality.
		$(this.getDOMNode()).modal();

	},

	render: function () {

		/*jshint ignore:start*/
		return (
			<div id="ResultModal" className="modal fade"
				tabindex="-1" role="dialog" aria-labelledby="ResultModal" aria-hidden="true">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<p className="text-center">{this.props.timeStamp}</p>
						<h1 className="text-center">{this.props.dieResult}</h1>
						<p className="text-center">{this.props.dieString}</p>
					</div>
				</div>
			</div>
		);
		/*jshint ignore:end*/

	}

});