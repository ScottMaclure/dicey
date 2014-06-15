/**
 * @jsx React.DOM
 */

var React = require('react');

exports.ResultModal = React.createClass({

	/**
	 * Invoked immediately after updating occurs. This method is not called for the initial render.
	 */
	componentDidUpdate: function (prevProps, prevState) {

		var self = this;

		// Show only if truthy.
		if (this.props.dieString) {

			var $modal = $(this.getDOMNode());

			// Trigger Bootstrap's modal functionality.
			$modal.modal();

			// Get browser to select the text, ready for copying into other applications.
			$modal.on('shown.bs.modal', function () {
				self.refs.clippy.getDOMNode().select();
			});

		}

	},

	render: function () {

		/*jshint ignore:start*/
		return (
			<div id="ResultModal" className="modal fade"
				tabIndex="-1" role="dialog" aria-labelledby="ResultModal" aria-hidden="true">
				<div className="modal-dialog modal-sm">
					<div className="modal-content">
						<p className="text-center">{this.props.timeStamp} {this.props.dieString}</p>
						<h1 className="text-center">{this.props.dieResult}</h1>
						<p className="text-center">
							Copy to clipboard:<br/>
							<input type="text" className="form-control" name="clippy" ref="clippy"
							value={'(' + this.props.dieString + ': ' + this.props.dieResult + ')'}/>
						</p>
					</div>
				</div>
			</div>
		);
		/*jshint ignore:end*/

	}

});