function smallestSubArray(targetSum, arr) {
  let runningSum = 0;
  let currentWindowSize = 0;
  let minSize = Infinity;
  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i];
    currentWindowSize++;
    if (runningSum >= targetSum) minSize = Math.min(currentWindowSize, minSize);
    while (
      i >= (currentWindowSize-1) &&
      runningSum - arr[i - (currentWindowSize - 1)] >= targetSum
    ) {
      runningSum -= arr[i - (currentWindowSize - 1)];
      currentWindowSize--;
			minSize = Math.min(currentWindowSize, minSize);
      // if (minSize === 1) return 1;
    }
  }
  return minSize;
}

console.log(smallestSubArray(8, [4, 4, 7, 8, 1, 2, 8, 10])); //1
console.log(smallestSubArray(11, [4, 2, 7, 8, 1, 2, 10])); //2
console.log(smallestSubArray(35, [4, 2, 7, 8, 1, 2, 10,22])); //4
console.log(smallestSubArray(35, [4, 2, 7, 8, 5, 2, 10,23])); //3
console.log(smallestSubArray(0, [4, 2, 7, 8, 5, 2, 10,23])); //1 | 0
console.log(smallestSubArray(1, [4, 2, 7, 8, 5, 2, 10,23])); //1 | 0
