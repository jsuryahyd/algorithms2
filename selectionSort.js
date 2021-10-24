// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-selection-sort

function selectionSort(array) {
  let sortedItemsCount = 0;
  while (sortedItemsCount < array.length - 1) {
    //last item will be autosorted because of all the previous ops
    let minIdx = sortedItemsCount;
    // console.log(array[sortedItems])
    // console.group(sortedItemsCount)
    for (let i = sortedItemsCount + 1; i <= array.length - 1; i++) {
      // console.log(array[i])
      if (array[i] < array[minIdx]) {
        minIdx = i;
      }
    }
    // console.groupEnd()
    let currentValue = array[sortedItemsCount];
    array[sortedItemsCount] = array[minIdx];
    array[minIdx] = currentValue;
    // console.log(array)
    sortedItemsCount++;
  }
  return array;
  // Only change code above this line
}
console.time();
const sorted = selectionSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
console.timeEnd();
setTimeout(() => {
  console.time();
  const inbuiltSorted = [
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ].sort((a, b) => (a > b ? 1 : -1));
  console.timeEnd();
	expect(sorted).to.eql(inbuiltSorted);
},0);
