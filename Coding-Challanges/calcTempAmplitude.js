"use strict";

const Temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function max(arr) {
  if (!Array.isArray(arr)) return -1;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;

    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function min(arr) {
  if (!Array.isArray(arr)) return -1;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;

    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

function mergeArray(arr1, arr2) {
  if (!(Array.isArray(arr1) && Array.isArray(arr2))) return -1;

  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  return arr1;
}

const calcTempAmplitude = function (arr) {
  if (!Array.isArray(arr)) return -1;
  return max(Temperatures) - min(Temperatures);
};

console.log(max(Temperatures), min(Temperatures));
const amplitude = calcTempAmplitude(Temperatures);
console.log("Amplitude: " + amplitude);

console.log(mergeArray(Temperatures, [1, 2, 3, 4]));
