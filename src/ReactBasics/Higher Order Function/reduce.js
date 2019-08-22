/**
 * @param {Higher Order Function :reduce}
 */
const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(sum);
