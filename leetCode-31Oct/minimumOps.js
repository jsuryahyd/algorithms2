// var minimumOperations = function(nums, start, goal) {
// 	if(start==goal) return 0;
// 	if(start>1000) return -1;
// 	if(start<0) return -1;
// 	let ops = 0;
// 	for(let num of nums){
// 			const updated = start - num;
// 			const _ops = minimumOperations(nums,updated,goal)
// 			if(_ops == 0 ) return ops;
// 			if(_ops == -1) break;
// 			ops+=_ops

// 	}
// 	for(let num of nums){
// 			const updated = start  + num;
// 			const _ops = minimumOperations(nums,updated,goal)    
// 			if(_ops == 0 ) return ops;
// 			if(_ops == -1) break;
// 			ops+=_ops
// 	}
// 	for(let num of nums){
// 			const updated = start ^ num;
// 			const _ops = minimumOperations(nums,updated,goal)    
// 			if(_ops == 0 ) return ops;
// 			if(_ops == -1) break;
// 			ops+=_ops
// 	}
// 	return ops;
// };

// var minimumOperations = function(nums,start,goal){
	
// 	const graph = buildGraph(nums.reduce((acc,num)=>acc.concat([[start,start+num],[start,start-num],[start,start^num]]),[]))
// 	console.log(graph)
// 	const queue = [[start,0]]
// 	const visited = new Set([start])
	
// 	while(queue.length>0){
// 		const [val,ops] = queue.shift()
// 		if(val === goal) return ops;
// 		for(let i of graph[val]){
// 			if(!visited.has(i)){
// 				visited.add(i);
// 				queue.push([i,])
// 			}
// 		}
// 	}

// 	return -1
// }

// function buildGraph(edges){
// 	const graph = {}
// 	for(let e of edges){
// 		const [a,b] = e;
// 		if(!graph[a]) graph[a] = []
// 		if(!graph[b]) graph[b] = []
// 		graph[a].push(b)
// 		graph[b].push(a)
// 	}
// 	return graph
// }
var minimumOperations = function(nums,start,goal){

	const visited = new Set();
	let bfsList = new Set([start])
	let ops = 0;
	while (bfsList.size){
		console.log(bfsList)
		const newList = new Set();
		for(let i of [...bfsList]){
			console.log(bfsList)
			if(i===goal) return ops;
			if(i>=0 && i<= 1000){
				if(!visited.has(i)){
					visited.add(i);
					for(let num of nums){
						newList.add(i+num)
						newList.add(i-num)
						newList.add(i^num)
					}
				}
			}
		}
		ops += 1
		console.log(newList,'newList')
		bfsList = newList;
	}
	return -1
}


console.time()
expect(minimumOperations([2,4,12],2,12)).to.be(2)
console.timeEnd()