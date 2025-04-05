

class numSubArrays{
 static naive(arr, sum){
		let count = 0
	for(let i=0;i<arr.length;i++){
		let _sum = 0
			for(let j=i;j<arr.length;j++){		
				_sum += arr[j]
				
				if(_sum === sum ) {break;}
			}
			if(_sum === sum) count++
		}

	return count
}


// static optimized(arr, sum){

// 	let prefixSum = 0;
// 	let count = 0;
// 	const prefixSumFreq = new Map()
// prefixSumFreq.set(0,0)
// 	for(const a of arr){
// 		prefixSum += a
// 		prefixSumFreq.set(prefixSum, (prefixSumFreq.get(prefixSum) || 0) + 1 )
// 		if(prefixSumFreq.has(prefixSum - sum)) count += prefixSumFreq.get(prefixSum - sum)
// 	}
// console.log(prefixSumFreq)
// 	return count;
// }

static optimized(arr, sum){	
	
	let prefixSum = 0;
	let count = 0;
	const prefixSumFreq = new Map()
	prefixSumFreq.set(0,1)
	for(const a of arr){
		prefixSum += a
		if(prefixSumFreq.has(prefixSum - sum)) count += prefixSumFreq.get(prefixSum - sum)
		prefixSumFreq.set(prefixSum, (prefixSumFreq.get(prefixSum) || 0) + 1 )
	}
	console.log(prefixSumFreq)
	return count;


}


}
console.log(numSubArrays.naive([1,2,3,-2,4], 5 ))
console.log(numSubArrays.optimized([1,2,3,-2,4], 5 ))
console.log(numSubArrays.optimized([1,2,3,-2,4], 3))

