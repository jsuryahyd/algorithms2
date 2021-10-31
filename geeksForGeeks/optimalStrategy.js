// function optimalStrategy(arr, I = true) {
//   // choice = i | arr.length-1 -> not just max.
//   // if (i) -> i + Math.min(new-i new arr.len-1)

//   if (arr.length === 0) return 0;
//   if (arr.length <= 2) return Math.max(...arr);
//   let winning = 0;

//   //first item
//   // const oppenentsMove = arr[1] > arr[arr.length-1] ? ;
// 	return  Math.max(arr[arr.length-1]+optimalStrategy(arr.slice(0,-1)),arr[0]+optimalStrategy(arr.slice(1,arr.length-1)),)
// }

function getWinning(arr, i, j, total) {
  if (j == i + 1) return Math.max(arr[i], arr[j]);

  // For both of your choices, the opponent
  // gives you total sum minus maximum of
  // his value
  return Math.max(
    total - getWinning(arr, i + 1, j, total - arr[i]),
    total - getWinning(arr, i, j - 1, total - arr[j])
  );
}

function optimalStrategy(arr) {
  const total = arr.reduce((acc, i) => acc + i, 0);
  return getWinning(arr, 0, arr.length - 1, total);
}


expect(optimalStrategy([3, 7])).to.be(7);
console.time("1");
// expect(optimalStrategy([5, 3, 7, 10])).to.be(15);
console.timeEnd("1");
expect(optimalStrategy([8, 15, 3, 7])).to.be(22);
