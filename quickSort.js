//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

function quickSort(arr) {
  // console.log(arr.length)
  if (arr.length <= 1) return arr;
  let randomIdx = Math.floor(arr.length / 2);
  // console.log(randomIdx,"index")
  //two loops
  // const leftArray = arr.filter(
  //   (a, idx) => a <= arr[randomIdx] && idx !== randomIdx
  // );
  // const rightArray = arr.filter(
  //   (a, idx) => a > arr[randomIdx] && idx !== randomIdx
  // );
  let leftArray = [];
  let rightArray = [];
  for (let idx = 0; idx < arr.length; idx++) {
    // console.log([idx,arr[idx]])
    const i = arr[idx];
    if (idx === randomIdx) continue;
    if (i <= arr[randomIdx]) leftArray.push(i);
    if (i > arr[randomIdx]) rightArray.push(i);
  }

  return [...quickSort(leftArray), arr[randomIdx], ...quickSort(rightArray)];
}

console.time();
expect(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
).to.eql(
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort(
    (a, b) => (a > b ? 1 : -1)
  )
);
console.timeEnd();

console.time();
expect(
  quickSort([5, 4, 33, 2, 8])
).to.eql(
  [5, 4, 33, 2, 8].sort(
    (a, b) => (a > b ? 1 : -1)
  )
);
console.timeEnd();

