/**
 * RollDice - JavaScript die roller, with an API based off the "rolldice" program in Linux:
 *
 * http://linux.die.net/man/1/roll
 * https://github.com/sstrickl/rolldice
 *
 * TODO Abstract to separate npm module! With test cases, etc.
 */

exports.RollDice = {

	roll: function (die) {

		var parts = die.trim().split('d');
		var dieType = parseInt(parts[1], 10); // The sides: 4, 6, 8, 10, etc.

		var result = Math.floor(Math.random() * dieType) + 1;

		return result;
	},

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
	}

};