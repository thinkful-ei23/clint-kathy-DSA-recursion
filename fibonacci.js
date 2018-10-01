'use strict'

function Fib(num) {
	if (num === 0) {
		return 0;
	} else if (num === 1) {
		return 1;
	} else {
		return Fib(num - 1) + Fib(num - 2)
	}
}
console.log(Fib(7))