function topKFrequent(nums, k) {

	const counts = {}

	for(let i of nums){
			counts[i] = counts[i] ? counts[i]+1 : 1
	}
	console.log(counts)
	// const result = Array(nums.length).fill('k')
	// 		for(let i in counts){
	// 		// if(!counts[result[0]] || (counts[result[0]] < counts[i])) {result[0] = i;;}
	// 			result[+counts[i]] = i;
	// 		console.log(result)
	// 		}
	
	
	const topCounts = Object.values(counts).sort((a,b)=> b - a).slice(0,k)
	return topCounts.map(c=>{
	    for(let i in counts){
	        if(counts[i] === c) {delete counts[i]; return i}
	    }
	})
	
	//


	// return result.filter(i=>i!='k').sort((a,b)=>b-a).slice(0,k)
}

console.log(topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], 6))