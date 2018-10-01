'use strict';

let str = 'The quick brown fox jumped over the lazy dog.';
//input2: ' ';
//output: [ 'The','quick','brown','fox','jumped','over','the','lazy','dog.' ]

function splitString (str, split) {
  let splitIndex = str.indexOf(split);
  if (splitIndex === -1 && str.length === 0) {
    return [];
  } else if (splitIndex === -1) {
    return str;
  } else {
    let word = str.slice(0, splitIndex);
    return [word].concat(splitString(str.slice(splitIndex + 1), split));
  }
}

console.log(splitString(str, ' '));