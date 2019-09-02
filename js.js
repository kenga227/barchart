"use strict";

const array = [];
let i = 0;

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 36);
}

function counter() {
  let queSize = getNumberOfCustomers();

  if (array.length > 39) {
    array.shift();
    array.push(queSize);
  } else {
    array.push(queSize);
  }
  i++;
  console.clear();
  console.log(array);
}

setInterval(counter, 1000);
