//https://www.youtube.com/watch?v=tWVWeAqZ0WU

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

expect(connectedComponentCount(graph)).to.be(2);

function connectedComponentCount(graph, count = 0) {
  const islandCount = 0;
  const visited = new Set();
  for (let i in graph) {
    if (traverseIsland(graph, i, visited)) {
      count++;
    }
  }
  return count;
}

function traverseIsland(graph, start, visited) {
  if (visited.has(start + "")) return false;
  //tick of the node,
  visited.add(start + "");

  for (let i of graph[start]) {
    traverseIsland(graph, i, visited);
  }
  return true;
}
