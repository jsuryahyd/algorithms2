//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

function mergeSort(arr) {
  // console.log(arr.length)
  if (arr.length <= 1) return arr;
  let halfIdx = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, halfIdx);
  let rightArray = arr.slice(halfIdx);
  // console.log(leftArray, rightArray);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  const sortedArray = [];
  //empty out both arrays into this new array and return;
  while (left.length && right.length) {
    sortedArray.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  while (left.length) {
    sortedArray.push(left.shift());
  }
  while (right.length) {
    sortedArray.push(right.shift());
  }
  return sortedArray;
}

console.time();
expect(
  mergeSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
).to.eql(
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort(
    (a, b) => (a > b ? 1 : -1)
  )
);
console.timeEnd();

console.time();
expect(mergeSort([5, 4, 33, 2, 8])).to.eql(
  [5, 4, 33, 2, 8].sort((a, b) => (a > b ? 1 : -1))
);
console.timeEnd();
