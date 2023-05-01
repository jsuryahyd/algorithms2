function splitArrayLargestSum(arr, parts) {
	let min = Infinity
for(let i=1;i<arr.length-(parts-1);i++){
	console.log("-----------group----------")
	min = Math.min(maxSumSubArray(arr,parts,i),min)
}
return min;
}



function maxSumSubArray(arr,parts,maxFirstArrLength){
	console.log(arr)
	if (parts === 1) return arr.reduce((a, item) => a + item, 0);
	// console.log(arr,arr.reduce((a, i) => a + i, 0))
  return Math.max(
		maxSumSubArray(arr.slice(0,maxFirstArrLength), 1),
    maxSumSubArray(
      arr.slice(maxFirstArrLength),
      parts - 1
    )
  );
}

console.log(splitArrayLargestSum([7, 2, 5, 10, 8], 2));//18

// [7,2,5],[10,8] -> 18
// [7],[2,5,10,8] -> 25
// [7,2,5,10],[8] -> 24 --> min total is 18

console.log(splitArrayLargestSum([1,2,3,4,5,], 3));
// 1 - 2 - 3,4,5 -> 12
// 1,2 - 3 - 4,5 -> 9
// 1,2,3 - 4 - 5 -> 6
// --------------------	
// min total         6