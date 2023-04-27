/**
 * https://www.youtube.com/watch?v=NslHdsQer0I&list=PLXzMwWvud3xSsw8TgFO2hjn5Yo-LSkyBx&index=31
 */

function permAlone(str) {
  const permuts = getPermutations(str.split(""));
  // console.log(permuts)
  const required = permuts.filter((p) => {
    let lastItem = null;
    for (var i of p) {
      if (lastItem === i) return false;
      lastItem = i;
    }
    return true;

    // return !(/(.)\1+/).test(p.join('')) //not efficient as for-loop
  });
  // console.log(required)
  return required.length;
}
// console.time()
// console.log(permAlone("aab"));
// console.timeEnd()
//=====================
console.time();
console.log(permAlone("aabccded")); //fellsseyuiyy
console.timeEnd();
function getPermutations(arr) {
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }

    generate(n - 1, heapArr);

    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }

      generate(n - 1, heapArr);
    }
  };

  generate(arr.length, arr.slice());

  return output;
}
