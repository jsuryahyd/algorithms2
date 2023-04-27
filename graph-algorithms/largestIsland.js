function largestIsland(graph) {
  const visitedItems = new Set();
  let largestCount = 0;
  for (let node in graph) {
    const count = traverseIslandAndFindSize(graph, node+"", visitedItems);
		// console.log(node,count)
    if (count > largestCount) {
      largestCount = count;
    }
  }
  return largestCount;
}

/**
 *
 * @param {object} graph
 * @param {string|number} node
 * @param {Set} visitedItems
 * @returns number
 */
function traverseIslandAndFindSize(graph, node, visitedItems) {
  if (visitedItems.has(node)) return 0;
  const toTraverse = [node];
  let size = 0;
  while (toTraverse.length) {
    const current = toTraverse.pop();
		visitedItems.add(current+"")
    size++;
    for (let neighbour in graph[current + ""]) {
			if(!visitedItems.has(neighbour)) toTraverse.push(neighbour+"");
    }
		console.log(toTraverse)
  }
  return size;
}

console.log("Solution: ", largestIsland({
  1: [0],
  0: [8, 1, 5],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}));
