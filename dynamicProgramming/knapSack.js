// function knapSack(v, w, W) {
//   const allCombos = solution(
//     v.map((vi, i) => ({ value: vi, weight: w[i] })),
//     W
//   );
//   // console.log(allCombos, W);
//   // let memo = {}
//   return allCombos.reduce((max, combo) => {
//     const thisValue = combo.reduce((t, i) => t + i.value, 0);
//     return max > thisValue ? max : thisValue;
//   }, 0);
// }
// function solution(items, sum, memo = {}) {
//   if (sum == 0 || (sum > 0 && items.every((i) => i.weight > sum))) return [[]];
//   if (sum < 0) return null;
//   let combos = [];
//   for (let i = 0; i < items.length; i++) {
//     const remaining = sum - items[i].weight;
//     // if(memo[remaining])
//     const restItems = items.slice();
//     restItems.splice(i, 1);
//     // console.log(memo[remaining],remaining)
//     memo[remaining] = memo[remaining] || solution(restItems, remaining, memo);
//     if (memo[remaining] != null) {
//       combos = combos.concat(memo[remaining].map((it) => [items[i], ...it]));
//     }
//   }
//   memo[sum] = combos;
//   return combos;
// }

function knapSack(v, w, W) {
  return solution1(
    v.map((vi, i) => ({ value: vi, weight: w[i] })),
    W
  );
}

//todo: failing with memoization
function solution1(items, sum, memo = {}) {
  if (sum == 0 || (sum > 0 && items.every((i) => i.weight > sum))) return 0;
  if (sum < 0) return null;
  let max = 0;
  for (let i = 0; i < items.length; i++) {
    const remaining = sum - items[i].weight;
    // if(memo[remaining])
    if(remaining<0) continue
    const restItems = items.slice();
    restItems.splice(i, 1);
    // console.log(memo[remaining],remaining)
    const key = restItems.map(r=>r.weight).join(",")+":"+remaining;

    memo[key] = memo[key]!= null ? memo[key] :  solution1(restItems, remaining,memo); //memo[remaining]

    // if(!memo[remaining]){
    // }
    if (memo[key] != null) {
      max =
        memo[key] + items[i].value > max
          ? memo[key] + items[i].value
          : max;

    }
  }
  // console.log(memo);
  
  memo[items.map(r=>r.weight).join(",")+":"+sum] = max;
  // console.log(sum,max)
  return max;
}

function solution2(v,w,W){

  const table = Array(w+1).fill(0).map(_=>Array(v+1).fill(0));
  console.table(table)


}

// [
//   {
//     input: [
//       [0,1,2]
//     ],
//     output: 0,
//   },
//   {
//     input: [[4,3,2,1]],
//     output: 2,
//   },
// 	{
//     input: [[1,2,3,4,5,6,7,8,9,0]],
//     output: -1,
//   }, {
//     input: [[2,1,3,5,2]],
//     output: 1,
//   },
// ].forEach((a, i) => {
//   console.time("idx:" + i);
//   expect(smallestEqual(...a.input)).to.eql(a.output);
//   console.timeEnd("idx:" + i);
// });

expect(knapSack([60, 100, 120], [10, 20, 30], 50)).to.be(220);
expect(knapSack([1, 2, 3], [4, 5, 1], 4)).to.be(3);

expect(
  knapSack(
    [
      57, 95, 13, 29, 1, 99, 34, 77, 61, 23, 24, 70, 73, 88, 33, 61, 43, 5, 41,
      63, 8, 67, 20, 72, 98, 59, 46, 58, 64, 94, 97, 70, 46, 81, 42, 7, 1, 52,
      20, 54, 81, 3, 73, 78, 81, 11, 41, 45, 18, 94, 24, 82, 9, 19, 59, 48, 2,
      72,
    ],
    [
      83, 84, 85, 76, 13, 87, 2, 23, 33, 82, 79, 100, 88, 85, 91, 78, 83, 44, 4,
      50, 11, 68, 90, 88, 73, 83, 46, 16, 7, 35, 76, 31, 40, 49, 65, 2, 18, 47,
      55, 38, 75, 58, 86, 77, 96, 94, 82, 92, 10, 86, 54, 49, 65, 44, 77, 22,
      81, 52,
    ],
    41
  )
).to.be(223);
