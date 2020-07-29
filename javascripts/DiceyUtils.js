var DiceyUtils = {

	/**
	 * TODO Move somewhere else.
	 */
	zeroPad: function (n, w) {

		var n_ = Math.abs(n);
		var zeros = Math.max(0, w - Math.floor(n_).toString().length);
		var zeroString = Math.pow(10, zeros).toString().substr(1);

		if (n < 0) {
			zeroString = '-' + zeroString;
		}

		return zeroString + n;
	},

	/**
	 * Generate a pretty timestamp for the User.
	 * TODO Should we not just use a library like moment-js?
	 */
	getFormattedTimestamp: function (someDate) {

		// Generate a nice, readable timestamp, using zero-padding.
		let h = DiceyUtils.zeroPad(someDate.getHours(), 2)
		let m = DiceyUtils.zeroPad(someDate.getMinutes(), 2)
		let s = DiceyUtils.zeroPad(someDate.getSeconds(), 2)
		return `[${h}:${m}:${s}]`

	}

}

// CommonJS
exports.DiceyUtils = DiceyUtils;