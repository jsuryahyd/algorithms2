//https://leetcode.com/problems/construct-target-array-with-multiple-sums/

//todo: wrong solution
function canConstructArray(targetArr){
	const startingArr = Array(targetArr.length).fill(1)
	const targetArraySorted = [...targetArr]
	targetArraySorted.sort()

	let minElementIdx =0
	// console.log(targetArr)

	while(minElementIdx<targetArr.length){
		const sum = startingArr.reduce((s,a)=>s+a,0)
		const occurenceIdx = targetArr.indexOf(sum)
		if(occurenceIdx == -1) return false;
		startingArr[occurenceIdx] = sum;
		if(sum > targetArraySorted[minElementIdx]) return false;
		minElementIdx++
	}
	return true;
}

console.log(canConstructArray([9,3,5]))//true
console.log(canConstructArray([1,1,1,2]))//false
console.log(canConstructArray([8,5]))//false