'use strict'

// input str
// output [str, trs,...]

function anagram(str) {
	if (!prefix) {
		return '';
	} else {
		for (let p = 0; p < str.length; p++) {
			str[p] + anagram(str.slice(p))

		}

	}
	index[0] + index[1], index[2], index[3]
	index[0] + index[1], index[3], index[2]

	index[0] + index[2], index[3], index[1]
	index[0] + index[2], index[1], index[3]

	index[0] + index[3], index[1], index[2]
	index[0] + index[3], index[2], index[1]
}
anagram("east")