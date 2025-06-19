//https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-quick-sort

export function mergeSort(arr) {
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

export function iterativeMergeSort(arr) {
  const n = arr.length;
  if (n <= 1) {
      return arr; // Already sorted
  }

  // Temporary array for merging (important for iterative merge sort)
  const tempArray = new Array(n);

  // Subarray size (starts at 1, doubles in each pass)
  let size = 1;

  while (size < n) {
      for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
          const mid = Math.min(leftStart + size - 1, n - 1);
          const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
          const leftEnd = mid;
          const rightStart = mid + 1;

          merge2(arr, leftStart, leftEnd, rightStart, rightEnd, tempArray);
      }
      size *= 2; // Double the subarray size for the next pass
  }
  return arr; // Array is now sorted in-place
}

function merge2(arr, leftStart, leftEnd, rightStart, rightEnd, tempArray) {
  let i = leftStart;
  let j = rightStart;
  let k = leftStart; // Index for tempArray

  while (i <= leftEnd && j <= rightEnd) {
      if (arr[i] <= arr[j]) {
          tempArray[k++] = arr[i++];
      } else {
          tempArray[k++] = arr[j++];
      }
  }

  // Copy remaining elements from left subarray (if any)
  while (i <= leftEnd) {
      tempArray[k++] = arr[i++];
  }

  // Copy remaining elements from right subarray (if any)
  while (j <= rightEnd) {
      tempArray[k++] = arr[j++];
  }

  // Copy sorted segment back to original array
  for (let index = leftStart; index <= rightEnd; index++) {
      arr[index] = tempArray[index];
  }
}


//iterative 2 
function sortArray(nums) {
  const q = []
  nums.forEach(n=>q.push([n]))
  while(q.length > 1){
      let merged = []
      const left = q.pop()
      const right = q.pop()
      let l =0;
      let r =0;
      while(l < left.length && r < right.length){
          if(left[l] < right[r]){
              merged.push(left[l])
              l++
          }else{
              merged.push(right[r])
              r++
          }
      }
      left.slice(l).forEach(l=>merged.push(l))        
      right.slice(r).forEach(r=>merged.push(r))
      q.push(merged)
  }
  return q[0]
};


function main(){
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
}

// main()
