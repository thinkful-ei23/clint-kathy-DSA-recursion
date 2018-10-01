'use strict';

// input: 'reverse'
// output: 'esrever'

function reverse(str) {
  console.log('str', str);
  if (!str.length) {
    return '';
  } else {
    return str[str.length - 1] + reverse(str.slice(0, -1));
  }
}

console.log(reverse('reverse'));
console.log(reverse('sdrawkcab'));
