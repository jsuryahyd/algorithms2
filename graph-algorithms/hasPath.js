const graph = {
  f: ["g", "h"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

expect(hasPath(graph, "f", "k")).to.be(true);

function hasPath(graph, start, end) {
  if (start === end) {
    return true;
  }
  const current = null;
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


