

function getOccurences(arr, num){
	const result =[ -1,-1]
	if(!arr.length) return result;
	// binary search
	if(arr[Math.floor(arr.length/2)] > num){
		let idx = Math.floor(arr.length / 2)
		while(idx>0){
			idx--
			if(arr[idx] === num && result[1] === -1){
				result[1] = idx
			}
			if(arr[idx] === num && arr[idx-1] !== num ){
				result[0] = idx;
				break;
			}
		}
	}else if(arr[Math.floor(arr.length/2)] < num){
		let idx = Math.floor(arr.length / 2)
		while(idx<arr.length){
			idx++
			if(arr[idx] === num && result[0] === -1){
				result[0] = idx
			}
			if(arr[idx] === num && (arr[idx+1] !== num || idx === arr.length-1) ){
				result[1] = idx
				break;
			}
		}
	}else {
		let idx = Math.floor(arr.length / 2)
		result[0] = idx
		result[1] = idx
		while(idx>0){
			if(arr[idx] === num ){
				result[1] = Math.max(result[1], idx)
			}
			if(arr[idx] === num && arr[idx-1] !== num ){
				result[0] = Math.min(result[0], idx);
				break;
			}
			idx--
		}
		while(idx<arr.length){
			if(arr[idx] === num ){
				result[0] = Math.min(result[0], idx);
			}
			if(arr[idx] === num && (arr[idx+1] !== num || idx === arr.length-1) ){
				result[1] = Math.max(result[1], idx)
				break;
			}
			idx++
		}
	}


	return result
}


console.log(getOccurences([5,7,7,8,8,10],8))
console.log(getOccurences([5,7,7,8,8,10],6))
console.log(getOccurences([],0))
console.log(getOccurences([2,2],2))