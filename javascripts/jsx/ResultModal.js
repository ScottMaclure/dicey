/**
 */

var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

exports.ResultModal = createReactClass({

	showModal: function () {
		// Show only if truthy.
		if (this.props.dieString) {

			// Trigger Bootstrap's modal functionality.
			$(ReactDOM.findDOMNode(this)).modal();

		}
	},

	componentDidMount: function () {
		this.showModal();
	},

	componentDidUpdate: function (prevProps, prevState) {
		this.showModal();
	},

	render: function () {

		/*jshint ignore:start*/
		return (
			<div id="ResultModal" className="modal fade"
				tabIndex="-1" role="dialog" aria-labelledby="ResultModal" aria-hidden="true">
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