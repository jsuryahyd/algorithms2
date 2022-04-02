var mostFrequent = function (nums, key) {
  const targets = {};
  nums.forEach((n, i) => {
    // if(i>nums.length-1)return
    if (n === key && i < nums.length - 1) {
      targets[nums[i + 1]] = targets[nums[i + 1]]
        ? targets[nums[i + 1]] + 1
        : 1;
    }
  });
  let maxTarget = Object.keys(targets)[0];
  for (let num in targets) {
    if (targets[num] > targets[maxTarget]) {
      maxTarget = num;
    }
  }
  return maxTarget;
};

// console.log(mostFrequent([1,100,200,1,100], 1));
// console.log(mostFrequent( [2,2,2,2,3], 2));

var sortJumbled = function (mapping, nums) {
  const processedNums = [];
  //get mapped values and make key-value pair, but cannot maintain input order if same mapped value.
  nums.forEach((n, i) => {
    const rank = (n + "")
      .split("")
      .map((digit) => mapping[digit])
      .join("");
    processedNums.push({ num: n, rank: Number(rank), originalIdx: i });
  });

  // return shuffled array
  return processedNums
    .sort((a, b) => {
      return a.rank > b.rank ? 1 : a.rank < b.rank ? -1 : 0;
    })
    .map((i) => i.num);
};

// console.log(sortJumbled([8,9,4,0,2,1,3,5,7,6], [991,338,38]));
// console.log(sortJumbled([0,1,2,3,4,5,6,7,8,9], [789,456,123]));
// console.time('wtf?')

function buildGraph(edges) {
  const graph = {};
  edges.forEach((edg) => {
    if (!graph[edg[0]]) {
      graph[edg[0]] = [];
    }
    if (!graph[edg[1]]) {
      graph[edg[1]] = [];
    }
    // graph[edg[0]].push(edg[1]);//asyclic
    graph[edg[1]].push(edg[0]);
  });
  // console.log(graph);
  return graph;
}

var getAncestors = function (n, edges) {
  const graph = buildGraph(edges);
  console.log(graph, n);
  const resultMap = {};
for (let i in graph) {
  resultMap[i] = [...graph[i]];
  graph[i].forEach((anc) => {
    (resultMap[anc] || []).forEach(
      (ac) => !resultMap[i].includes(ac) && resultMap[i].unshift(ac)
    );
  });
}

dfs
for(let i)

const result = Object.keys(resultMap)
  .map((i) => Number(i))
  .sort()
  .map((ancstrs) => resultMap[ancstrs].sort());
return result.concat(Array(n - result.length).fill([]));
};
// function buildGraph2(edges) {
//   const graph = {};
//   edges.forEach((edg) => {
//     if (!graph[edg[0]]) {
//       graph[edg[0]] = [];
//     }
//     if (!graph[edg[1]]) {
//       graph[edg[1]] = [];
//     }
//     graph[edg[0]].push(edg[1]);//asyclic
//     // graph[edg[1]].push(edg[0]);
//   });
//   // console.log(graph);
//   return graph;
// }
// var getAncestors = function (n, edges) {
//   const graph = buildGraph2(edges);
//   console.log(graph, n);
//   const resultMap = {};
//   const result = [];
//   // dfs
//   for (let i in graph) {
//    result[i] = []
//    graph[i].forEach((dest)=>{
//     if(!result[dest]) result[dest] = []
//     result[dest].push(i)
//    })
//   }

//   return result
// };
console.log(
  getAncestors(8, [
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [2, 7],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 6],
  ])
);

// console.log(
//   getAncestors(6, [
//     [0, 3],
//     [5, 0],
//     [2, 3],
//     [4, 3],
//     [5, 3],
//     [1, 3],
//     [2, 5],
//     [0, 1],
//     [4, 5],
//     [4, 2],
//     [4, 0],
//     [2, 1],
//     [5, 1],
//   ])
// );
// console.log(
//   getAncestors(9, [
//     [7, 5],
//     [2, 5],
//     [0, 7],
//     [0, 1],
//     [6, 1],
//     [2, 4],
//     [3, 5],
//   ])
// );

// console.log(
//   getAncestors(6, [
//     [0, 3],
//     [5, 0],
//     [2, 3],
//     [4, 3],
//     [5, 3],
//     [1, 3],
//     [2, 5],
//     [0, 1],
//     [4, 5],
//     [4, 2],
//     [4, 0],
//     [2, 1],
//     [5, 1],
//   ])
// );
