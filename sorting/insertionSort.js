import expect from "expect.js";
/**
 * @link https://www.youtube.com/watch?v=Q_U71D3U23M
 * @link https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-insertion-sort
 */

export default function insertionSort(array) {
  const sortedArray = [array[0]];
  // console.group('')
  for (let i = 1; i < array.length; i++) {
    sortedArray.push(array[i]);
    // console.log('unsorted',sortedArray)
    //now lets sort this new array,backwards bubble sort
    // console.group('j')
    for (let j = sortedArray.length; j >= 0; j--) {
      // console.log(j,sortedArray[j]);
      // for (let k = j - 1; k >= 0; k--) {
      //   // console.log(k, sortedArray[k]);
      //   if (sortedArray[j] < sortedArray[k]) {
      //     [sortedArray[k], sortedArray[j]] = [sortedArray[j], sortedArray[k]];
      //   }
      // }
			  if (sortedArray[j] < sortedArray[j-1]) {
          [sortedArray[j-1], sortedArray[j]] = [sortedArray[j], sortedArray[j-1]];
        }
      // console.groupEnd()
    }
    // console.log('sorted',sortedArray)
  }
  // console.groupEnd()
  return sortedArray;
  // Only change code above this line
}

function main(){
  
console.time();
const sorted = insertionSort([
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
}, 0);
const testCases = [{input:[5, 4, 33, 2, 8],output:[5, 4, 33, 2, 8].sort((a, b) => (a > b ? 1 : -1))}].map(({input})=>{
	setTimeout(() => {
		console.time();
		const sorted = insertionSort(input)
		console.timeEnd()
		console.time();
		const inbuiltSorted = input.sort((a, b) => (a > b ? 1 : -1));
		console.timeEnd();
		expect(sorted).to.eql(inbuiltSorted);
	}, 0);
	
})
}

// main()