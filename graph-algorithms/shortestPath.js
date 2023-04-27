function edgesToAdjacenyList(edges) {
  const graph = {};
  edges.forEach((e) => {
    graph[e[0]] = graph[e[0]] || [];
    graph[e[1]] = graph[e[1]] || [];

    graph[e[0]].push(e[1]);
    graph[e[1]].push(e[0]);
  });
  return graph;
}

function shortestPath(edges, a, b) {
  const graph = edgesToAdjacenyList(edges);
  console.log(graph);
  let distance = -1;
  if (a === b) return 0;
  // bfs
  const queue = [[a,0]];
	const visited = new Set()

  while (queue.length) {
		// console.log(queue)
    const [current,distance] = queue.pop();
		// pathLength++;
		if (current === b) return distance;
		visited.add(current)
    for (let neighbour of graph[current]) {
      if(!visited.has(neighbour)){
				queue.unshift([neighbour,distance+1]);
			} 
    }
  }

  return distance;
}

console.log(
  shortestPath(
    [
      ["w", "x"],
      ["x", "y"],
      ["z", "y"],
      ["z", "v"],
      ["w", "v"],
    ],
    "w",
    "z"
  )
);
