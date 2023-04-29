function _powerOf3(num) {
  if (num < 3) return false;
  let init = 3;
  for (let i = 1; i < Infinity; i++) {
    init = init * 3;
    if (init === num) {
      return true;
    } else if (init > num) {
      return false;
    }
  }
  return false;
}

function __powerOf3(num) {
  if (num < 3) return false;

  while (num % 3 === 0) {
    num = num / 3;
  }
  return num === 1;
}

/**
 *
 * @description any number of a power turned to a base, will be starting with 1 and all else will be zeroes
 */
function powerOf3(num) {
  const base3Num = num.toString(3);
  console.log(base3Num);
  let idx = 1; //all numbers from second letter should be "0"
  while (idx < base3Num.length - 1) {
    if (base3Num[idx] !== "0") return false;
    idx++;
  }
  return base3Num[0] === "1";
}

console.log(powerOf3(81));
console.log(powerOf3(99));
console.log(powerOf3(23498734));
console.time();
console.log(powerOf3(14348907)); //3**15
console.timeEnd();
console.time();
console.log(powerOf3(1162261467)); //3**19
console.timeEnd();
