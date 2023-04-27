// https://app.codility.com/c/feedback/demo585R8J-HME/
// function solution(A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const sorted = A.sort((a, b) => (a > b ? 1 : -1));
//   // console.log(sorted)
//   // let solution = sorted[A.length - 1] + 1;
//   let solution = 1;
//   // console.log(solution)
//   if (sorted[A.length - 1] <= 0) return 1; //all items are less than 0
//   for (let i = 0; i <= sorted.length; i++) {
//     if (sorted[i] <= 0) {
//       continue;
//     }
// 		if(sorted[i] < solution){
// 			break;
// 		}
// 		if(sorted[i] == solution){
// 			solution = sorted[i]+1
// 		}
//     // console.log(sorted[i]+1, sorted[i + 1] , solution)
//   }

//   return solution > 0 ? solution : 1;
// }

function solution(A) {
  var min = 1;
  A.sort(function(a,b){
     // Sort the array explicit way
     return a - b; 
  });

  for (var i in A) {
      if (A[i] > -1 && A[i] == min) {
              min++;
      }
  }

  return min;
}

// function solution(A) {
// 	const orderedArr = [];
// 	for (let i = 0; i < A.length; i++) {
// 			if (!orderedArr[A[i]]) {
// 					orderedArr[A[i]] = true;
// 			 }
// 	}
// 	if (orderedArr.length === 0) return 1;
// 	for (let i = 1; i < orderedArr.length; i++) {
// 			if (!orderedArr[i]) {
// 					return i;
// 			}
// 	}
// 	return orderedArr.length;
// }
function genNumbers() {
  const w = [];
  let skipped = null;
  for (let i = -5; i < 1000000 - 1; i++) {
    if (Math.random() < 0.1) {
      if (skipped == null && i > 0) skipped = i;
    } else {
      w.push(i);
    }
  }
  return { w, skipped: skipped || 10000001 };
}
function test() {
  console.time();
  const sol = solution([
    -5, -3, -2, -1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57,
    58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 76, 78,
    79, 80, 82, 83, 84, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100,
    101, 102, 103,
  ]);

  console.timeEnd();
  expect(sol).to.be(1);
}
function tryUntilError() {
  let w, skipped;
  try {
    const { w: wi, skipped: skippedi } = genNumbers();
    w = wi;
    skipped = skippedi;
    console.time();
    const sol2 = solution(w);
    console.timeEnd();
    expect(sol2).to.be(skipped); //fail point
    console.log("success", skipped, sol2);
    setTimeout(() => {
      tryUntilError();
    }, 200);
  } catch (e) {
    console.log(w, skipped);
    throw e;
  }
}
// setTimeout(()=>{
// 	tryUntilError();

// },1000)
test()
// solution(Array(1000000).fill())
