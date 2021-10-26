const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

//more memory
// function buildGraph(edges) {
//   const graph = {};
//   edges.forEach((edg) => {
//     graph[edg[0]] = graph[edg[0]] ? [...graph[edg[0]], edg[1]] : [edg[1]];
//     graph[edg[1]] = graph[edg[1]] ? [...graph[edg[1]], edg[0]] : [edg[0]];
//   });
//   return graph;
// }

function buildGraph(edges) {
  const graph = {};
  edges.forEach((edg) => {
    if (!graph[edg[0]]) {
      graph[edg[0]] = [];
    }
    if (!graph[edg[1]]) {
      graph[edg[1]] = [];
    }
    graph[edg[0]].push(edg[1]);
    graph[edg[1]].push(edg[0]);
  });
  console.log(graph);
  return graph;
}

function hasPath(graph, src, dst, visited = new Set()) {
  if (src === dst) return true;
  visited.add(src);
  for (let i of graph[src]) {
    if (visited.has(i)) continue;
    const _hasPath = hasPath(graph, i, dst, visited);
    if (_hasPath) return true;
  }
  return false;
}

function hasUndirectedPath(edges, src, dst) {
  const graph = buildGraph(edges);
  return hasPath(graph, src, dst, new Set());
}

expect(hasUndirectedPath(edges, "i", "k")).to.be(true);
expect(hasUndirectedPath(edges, "i", "o")).to.be(false);
