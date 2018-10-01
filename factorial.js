'use strict'

function factorial(num) {
	if (num === 1) {
		return 1;
	} else {
		console.log(num, 'here here here')
		return num * factorial(num - 1)
	}
}
console.log(factorial(5))