const graph = {
  f: ["g", "h"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

expect(hasPath(graph, "f", "k")).to.be(false);
expect(hasPath_recursion(graph, "f", "k")).to.be(false);

function hasPath(graph, start, end) {
  if (start === end) {
    return true;
  }
  const choicePath = [start];
  while (choicePath.length) {
    const current = choicePath.pop();
    if (current === end) return true;
    for (let i of graph[current]) {
      choicePath.push(i);
    }
  }

  return false;
}

function hasPath_recursion(graph, start, end) {
  if (start === end) {
    return true;
  }
  const current = start;
  for (let i of graph[start]) {
    if (hasPath_recursion(graph, i, end)) return true;
  }

  return false;
}
