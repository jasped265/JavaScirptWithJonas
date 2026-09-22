"use strict";

function printForcast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${arr[i]}ºC in ${i + 1} days`);
  }
}

const forcastValues = [17, 21, 13];
const dataTest = [12, 5, -5, 0, 4];
printForcast(forcastValues);
console.log("\n");
printForcast(dataTest);
