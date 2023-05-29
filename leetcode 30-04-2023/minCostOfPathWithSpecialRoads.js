// https://leetcode.com/contest/weekly-contest-343/problems/minimum-cost-of-a-path-with-special-roads/

/**
 * @param {number[]} start
 * @param {number[]} target
 * @param {number[][]} specialRoads
 * @return {number}
 */
var minimumCost = function (start, target, specialRoads) {
  const usefulSpecialRoads = [];
  while (specialRoads.length) {
    const roadDetails = specialRoads.shift();
    const normalCost =
      Math.abs(roadDetails[2] - roadDetails[0]) +
      Math.abs(roadDetails[3] - roadDetails[1]);
    if (normalCost > roadDetails[4]) usefulSpecialRoads.push(roadDetails);
  }
  // console.log(usefulSpecialRoads);
  if (!usefulSpecialRoads.length)
    return Math.abs(target[0] - start[0] + target[1] - start[1]);
  return move([start[0], start[1]], target, usefulSpecialRoads);
};

function move(start, target, usefulSpecialRoads) {
  let cost = 0;
  if (start[0] === target[0] && start[1] === target[1]) return cost;
  const specialRoad = usefulSpecialRoads.find(
    (r) => r[0] === start[0] && r[1] === start[1]
  );
  if (specialRoad) {
    cost += specialRoad[4];
    start[0] = specialRoad[2];
    start[1] = specialRoad[3];
    return cost + move([start[0], start[1]], target, usefulSpecialRoads);
  }
  // start[0] < target[0] && (start[0]+=1,cost+=1)
  let costIfMovedBottom = cost;
  let costIfMovedRight = cost;
  if (start[1] < target[1]) {
    start[1] += 1;
    costIfMovedBottom += 1;
    costIfMovedBottom =
      costIfMovedBottom +
      move([start[0], start[1]], target, usefulSpecialRoads);
  } else if (start[1] > target[1]) {
    start[1] -= 1;
    costIfMovedBottom += 1;
    costIfMovedBottom =
      costIfMovedBottom +
      move([start[0], start[1]], target, usefulSpecialRoads);
  }
  if (start[0] < target[0]) {
    start[0] += 1;
    costIfMovedRight += 1;
    costIfMovedRight =
      costIfMovedRight + move([start[0], start[1]], target, usefulSpecialRoads);
  } else if (start[0] > target[0]) {
    start[0] -= 1;
    costIfMovedRight += 1;
    costIfMovedRight =
      costIfMovedRight + move([start[0], start[1]], target, usefulSpecialRoads);
  } 
  return Math.min(costIfMovedBottom, costIfMovedRight);
}

[
  [
    [1, 1],
    [4, 5],
    [
      [1, 2, 3, 3, 2],
      [3, 4, 4, 5, 1],
    ],
  ],
  [
    [3, 2],
    [5, 7],
    [
      [3, 2, 3, 4, 4],
      [3, 3, 5, 5, 5],
      [3, 4, 5, 6, 6],
    ],
  ],
].forEach((args) => {
  console.log(minimumCost(...args));
});
