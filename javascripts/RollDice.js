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
	}

};