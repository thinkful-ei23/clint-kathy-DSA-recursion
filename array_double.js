'use strict'

function arrayDouble(arr) {
	if (!arr.length) {
		return [];
	} else {
		return [(arr[0] * 2), ...arrayDouble(arr.slice(1))];
	}
}
console.log(arrayDouble([1, 3, 5, 8]))