'use strict';

function countSheep (num) {
  if (num === 0) {
    return;
  } else {
    console.log(`${num} - Another sheep jumped over the jeep`);
    countSheep(num - 1);
  }
}

countSheep(20);

//==========================================
