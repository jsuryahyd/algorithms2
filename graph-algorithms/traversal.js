//https://www.youtube.com/watch?v=tWVWeAqZ0WU
/**
 * a->b->d->f
 * |     
 * c->e
 */
var graph = {
	a:['b','c'],
	b:['d'],
	c:['e'],
	d:['f'],
	e:[],
	f:[]
}

function dfs_print(graph,root){
	let current = null;
	const yetToBeTraversed = [root];
	let summation = ""
	while(yetToBeTraversed.length){
		console.log(yetToBeTraversed);
		current = yetToBeTraversed.pop();
		console.log(current);
		summation = summation+current
		for(let i of graph[current]){
			yetToBeTraversed.push(i)
		}
	}
	return (summation)
}


function dfs_recursive_print(graph,root){
	let summation = root;
	for(let i of graph[root]){
		 summation += dfs_recursive_print(graph,i)
	}
	return (summation)
}

console.log(dfs_print(graph,'a'));
console.log(dfs_recursive_print(graph,'a'));


function bfs_print(graph,root){
	let current = null;
	const yetTobeTraversed = [root]
	let summation = ""
	while(yetTobeTraversed.length){
		current = yetTobeTraversed.pop()
		summation += current
		for(let i of graph[current]){
			yetTobeTraversed.unshift(i)
		}
	}
	return summation;
}
console.log(bfs_print(graph,'a'))