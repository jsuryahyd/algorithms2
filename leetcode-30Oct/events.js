// var maxTwoEvents = function (events) {
//   //possible combinations - non-overlapping

//   const nonOverlapping = [];
//   for (let i = 0; i < events.length; i++) {
//     for (let j = 1; j < events.length; j++) {
//       // console.log(i, j);
//       if (i == j) continue;
//       if (events[j][0] > events[i][1] || events[i][0] > events[j][1]) {
//         //next.start >= this.end
//         nonOverlapping.push([i, j]);
//       }
//     }
//   }
  
//   const max = Math.max(
//     ...nonOverlapping.map((combo) =>
//       combo.reduce((acc, idx) => acc + events[idx][2], 0)
//     ),
// 		...events.map(e=>e[2])
//   );
// 	return max
// };

var maxTwoEvents = function (events) {
  //possible combinations - non-overlapping

  
    let max  = Math.max(...events.map(e=>e[2]))
  for (let i = 0; i < events.length; i++) {
    for (let j = 1; j < events.length; j++) {
      // console.log(i, j);
      if (i == j) continue;
      if (events[j][0] > events[i][1] || events[i][0] > events[j][1]) {
        //next.start >= this.end
          let thisSum = events[i][2]+events[j][2];
          if(thisSum>max ) max = thisSum;
      }
    }
  }
  
	return max
};

expect(
  maxTwoEvents([
    [1, 5, 3],
    [1, 5, 1],
    [6, 6, 5],
  ])
).to.be(8);

expect(
  maxTwoEvents([
    [1, 3, 2],
    [4, 5, 2],
    [2, 4, 3],
  ])
).to.be(4);

expect(
  maxTwoEvents([
    [4, 5, 2],
    [1, 3, 2],
    [2, 4, 1],
  ])
).to.be(4);



expect(
  maxTwoEvents([[1,3,2],[4,5,2],[1,5,5]])
).to.be(5);


