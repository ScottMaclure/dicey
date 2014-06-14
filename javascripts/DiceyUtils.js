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
	 */
	getFormattedTimestamp: function (someDate) {

		// Generate a nice, readable timestamp, using zero-padding.
		return [
			'[',
			DiceyUtils.zeroPad(someDate.getHours(), 2),
			':',
			DiceyUtils.zeroPad(someDate.getMinutes(), 2),
			':',
			DiceyUtils.zeroPad(someDate.getSeconds(), 2),
			']'
		].join('');

	},

	/**
	 * Pretty formatting for droll result.
	 * { rolls: [ 5, 2, 2 ], modifier: 1, total: 10 }
	 */
	getDieResultFromDroll: function (rollData) {

		if (rollData.rolls.length === 1) {
			return rollData.total;
		}

		return '[' + rollData.rolls + '] = ' + rollData.total;
	}

}

// CommonJS
exports.DiceyUtils = DiceyUtils;