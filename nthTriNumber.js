'use strict'

function TriNum(num) {
	if (num === 0) {
		return 0;
	} else {
		console.log(num)
		return (num) + TriNum(num - 1)
	}
}
console.log(TriNum(9))