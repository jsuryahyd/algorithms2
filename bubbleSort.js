function bubbleSort(array) {
  // Only change code below this line
  let swapMade = true;
  while (swapMade) {
		let swapCount = 0;
		let lastItem = null;
    array.forEach((currentItem, idx) => {
      if (idx === 0) return;
      if (currentItem < lastItem) {
				array[idx - 1] = currentItem;
        array[idx] = lastItem;
				// console.log(array,currentItem,lastItem)
        swapCount++;
      }else{
				//if not swapped, only then lastItem value has to be updated
				lastItem = currentItem;

			}
    });
    swapMade = swapCount != 0;
  }
  return array;
  // Only change code above this line
}

expect(bubbleSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
])).to.eql(
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92].sort((a,b)=>a > b ? 1 : -1 )
);
