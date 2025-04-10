/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 * time complexity o(NlogN)
 * space complexity (oN)
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length === 0 || hand.length % groupSize !== 0) return false;
	if(groupSize === 1) return true
  hand.sort((a, b) => a - b);
  let currentGroupSize = 0;
  let curr = 0;
  let lastGroupEl = null;
  let _ = 0;
  while (hand.length && curr <= hand.length) {
		if(lastGroupEl === null && curr === 0){
			// curr++;
			[lastGroupEl] = hand.splice(0,1)
			currentGroupSize++
			continue;
		}
    if (hand[curr] === lastGroupEl) {
      curr++;
      continue;
    } else if (lastGroupEl + 1 === hand[curr]) {
      currentGroupSize++;
      [lastGroupEl] = hand.splice(curr, 1);
    } else {
      //a gap in numbers
      if (currentGroupSize != 0 || currentGroupSize !== groupSize) return false;
    }
    if (currentGroupSize === groupSize) {
      currentGroupSize = 0;
      curr = 0;
			lastGroupEl = null;
    }
  }

  return currentGroupSize === 0;
};

var isNStraightHand_best = function (hand, groupSize) {
	if (hand.length % groupSize !== 0) return false

	const count = new Map();
	for (let num of hand){
			count.set(num, count.get(num) + 1 || 1)
	}

	for (const num of hand) {
			let start = num;
			while (count.get(start - 1) > 0) start--;
			while (start <= num) {
					while (count.get(start) > 0) {
							for (let i = start; i < start + groupSize; i++) {
									if (!count.get(i)) return false;
									count.set(i, count.get(i) - 1);
							}
					}
					start++;
			}
	}
	return true;
};


/*
[1,2,2,3,3,4,6,7,8]
lastGroupEl = hand[0]
curr = 1
currentGroupSize=1
while(hand.length)
if(hand[curr] === lastGroupEl) curr++;continue
else if(lastGroupEl + 1 === hand[curr]) currentGroupSize ++;[lastGroupEl]=hand.splice(curr, 1);
else {
	//a gap in numbers
	if(currentGroupSize != groupSize || curr != 0) return false;
}
if(currentGroupSize === groupSize) curr=0;currentGroupSize=0;

[11223344666777888] 4



*/
[
	[[2,3,4,5,6,7,8,9],8, true],
	[[8,8,9,7,7,7,6,7,10,6], 2, true],
	[[66,75,4,37,92,87,68,65,58,100,97,42,19,66,73,1,5,44,30,29,76,31,12,35,26,93,9,36,90,16,86,15,4,9,13,98,10,14,18,90,89,3,10,65,24,31,43,25,54,55,54,81,10,80,31,12,15,14,59,27,64,93,32,26,69,79,13,32,29,24,27,91,92,82,37,101,100,61,74,30,91,62,36,92,28,23,4,63,55,3,11,11,101,22,34,25,2,75,43,72], 2, true],
	[[1,1,2,2,3,3], 2, false],
	[[1,2,3],1,true]
].forEach(item=>expect(isNStraightHand(item[0],item[1])).to.be(item[2]))

expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).to.be(true);
expect(isNStraightHand([1, 2, 3, 4, 5], 4)).to.be(false);
console.log(
	'done'
)
