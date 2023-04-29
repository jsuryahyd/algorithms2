function maxSumSubArray(arr, k) {
  let max = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let runningSum = 0;
    for (let j = i; j < i + k; j++) {
      // console.log(arr[j], j);
      runningSum += arr[j];
    }
    // console.log("-------------");
    max = runningSum > max ? runningSum : max;
  }
  return max;
}

console.log(maxSumSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3)); //16


function slidingWindow(arr,k){
	let max = -Infinity;
	let runningSum = 0
	for(let i=0;i<arr.length;i++){
		runningSum+=arr[i]
		if(i>=k-1){
			max = Math.max(max, runningSum);
			runningSum -= arr[i-(k-1)]
		}
	}
	return max;

}
console.log(slidingWindow([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3)); //16
