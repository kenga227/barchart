"use strict";

const array = [];
let i = 1;

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 36);
}

function count() {
  let queSize = getNumberOfCustomers();

  if (array.length > 39) {
    array.shift();
    array.push(queSize);
  } else {
    array.push(queSize);
  }

  console.clear();
  console.log(array);
  if (i > 40) {
    for (let j = 1; j < 41; j++) {
      document.querySelector("#bar" + j).style.height = array[j - 1] * 4 + "px";
      document.querySelector("#bar" + j).style.marginTop =
        140 - array[j - 1] * 4 + "px";
    }
  } else {
    document.querySelector("#bar" + i).style.height = queSize * 4 + "px";
    document.querySelector("#bar" + i).style.marginTop =
      140 - queSize * 4 + "px";
    i++;
  }
}

setInterval(count, 300);
