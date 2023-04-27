/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (list) {
	// console.log(head)
// 	const arr = [head.val];
// 	while(head.next !== null){
//     head = head.next;
//     arr.push(head.val)
// }
	if(list.length <= 2) return [-1,-1]
	function minDifference(arr) {
		let minDiff = Infinity;
		for (let i = 1; i < arr.length; i++) {
			const diff = arr[i] - arr[i - 1];
			// console.log(diff,arr[i],arr[i-1])
			if (diff < minDiff) {
				minDiff = diff;
			}
		}
		return minDiff;
	}
  const criticalIndices = [];
  for (let i = 1; i < list.length - 1; i++) {
    if (
      (list[i] > list[i + 1] && list[i] > list[i - 1]) ||
      (list[i] < list[i + 1] && list[i] < list[i - 1])
    ) {
      //strictly, so not =
      criticalIndices.push(i);
    }
  }
  console.log(criticalIndices);
  if (criticalIndices.length<=1) return [-1, -1];
  // let min= Infinity;
  // let max = -Infinity
  // for(let i=0;i<criticalIndices.length;i++){
  // 	max = max > criticalIndices[i]
  // }
  return [minDifference(criticalIndices), criticalIndices[criticalIndices.length - 1] - criticalIndices[0]];
};


// function minDifference(arr){
//   return arr.reduce(function(r, e, i) {
//     let absR = Math.abs(r), absE = Math.abs(e);
//     if (absR > absE || i == 0 || (absR == absE && e > r)) r = e
//     return r
//   },-1)

// }
[
  {
    input: [[3, 1]],
    output: [-1, -1],
  },
  {
    input: [[5, 3, 1, 2, 5, 1, 2]],
    output: [1, 3],
  },
  {
    input: [[1, 3, 2, 2, 3, 2, 2, 2, 7]],
    output: [3, 3],
  },
  {
    input: [[2, 3, 3, 2]],
    output: [-1, -1],
  },
	{
    input: [[2,2,1,3]],
    output: [-1, -1],
  },
].forEach((a, i) => {
  console.time("idx:" + i);
  expect(nodesBetweenCriticalPoints(...a.input)).to.eql(a.output);
  console.timeEnd("idx:" + i);
});
