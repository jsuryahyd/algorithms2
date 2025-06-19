function getSubSequenceLen(nums) {
  // if (nums.length <= 1) return 0;
  // let len = 0;

  // if (nums[0] <= nums[1]) {
  // 	len += 1;
  // }
  // const subSeqLen = getSubSequenceLen(nums.slice(nums.length-2));
  // console.log(nums,nums[nums.length - 2] ,'<=',nums[nums.length-1], nums[nums.length - 2] <= nums[nums.length-1] ? '✔' : "",subSeqLen)

  // return len + subSeqLen;
  const seqLen = {};
  const seq = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(i);
    seq[i] = Array(nums.length).fill();
    for (let j = 1; j < nums.length; j++) {
      console.log(
        seq[i][seq[i].length - 1],
        "<",
        nums[j],
        seq[i][seq[i].length - 1] < nums[j] ? "✔" : ""
      );
      if (seq[i][seq[i].length - 1] < nums[j]) {
        seq[i] = [...seq[i], nums[j]];
      }
    }
  }

  for (let i in seq) {
    seqLen[i] = seq[i].length;
  }
  console.log(seqLen, seq);
  return Math.max(...Object.values(seqLen));
}

/**
 * loop: start with each element
 *  if(n === startIdx) take it
 *  if(n[i] > n[prev])
 *    either take it
 *    not take it
 *
 * [5, -2, 8, -6, -3, 0, 6, 9, 5]
 * 5,8,9
 *   8,
 *   6,9
 *   6
 * -2, 8, 9
 *    8
 *    0, 6, 9
 *    0, 6
 *    0, 9
 *    0
 * -6, -3, 0
 *         0,6,9
 *         0,6
 *         0,9
 *         0
 *         0,5
 *     -3, 6
 *     0
 *     6
 *     9
 *     5
 *
 
 */

// function lengthOfLIS(nums, startIdx = 0, prevIdx:null|number=null, memo={}) {
//   if(memo[startIdx+":"+prevIdx]) return memo[startIdx+":"+prevIdx]
//   if (!nums.length) return 0;
//   let maxLen = 0;
//   for (let i = startIdx; i < nums.length; i++) {
//     if (prevIdx === null) {
//       maxLen = Math.max(1 + lengthOfLIS(nums, i + 1, i, memo), maxLen);
//       continue;
//     }
//     if (nums[i] > nums[prevIdx]) {
//       maxLen = Math.max(
//         1 + lengthOfLIS(nums, i + 1, i, memo),
//         lengthOfLIS(nums, i + 1, prevIdx, memo),
//         maxLen
//       );
//     }

//     if(maxLen > nums.length - 1 - i) continue;
//   }
//   // if(memoLIS[startIdx]) console.log({...memoLIS}, startIdx, maxLen)
//   memo[startIdx+":"+prevIdx] = maxLen;
//   // console.log(memo)
//   return maxLen;
// }

function lengthOfLIS(nums) {
  const tails = [];

  for (let num of nums) {
      let left = 0, right = tails.length;
      while (left < right) {
          let mid = Math.floor((left + right) / 2);
          if (tails[mid] < num) left = mid + 1;
          else right = mid;
      }
      if (left === tails.length) {
          tails.push(num);
      } else {
          tails[left] = num;
      }
  }
  console.log(tails)
  return tails.length;
}
expect(lengthOfLIS([3, 1, 8, 2, 5])).to.be(3);
expect(lengthOfLIS([10, 8, 2, 97,98,99, 100, 3])).to.be(5);
// expect(lengthOfLIS([0,1,0,3,2,3])).to.be(3);
expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).to.be(4);
expect(lengthOfLIS([5, -2])).to.be(1);
expect(lengthOfLIS([5, 21])).to.be(2);
expect(lengthOfLIS([5])).to.be(1);
expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).to.be(1);
expect(lengthOfLIS([5, -2, 8, -6, -3, 0, 6, 9, 5])).to.be(5);
expect(lengthOfLIS([4, 10, 4, 3, 8, 9])).to.be(3);
// console.log(getSubSequenceLen([5, 2, 8, 6, 3, 6, 9, 5]))


/**
 * The statement "For each length of an increasing subsequence, store the smallest possible value that can be the 'tail' of that subsequence" is a key heuristic in the binary search approach to solving the Longest Increasing Subsequence (LIS) problem. Let’s break it down and expand on it:

What Does "Tail" Mean in This Context?
The "tail" of a subsequence is the last element of that subsequence.
For example, in the subsequence [2, 5, 7], the tail is 7.
The tail is important because it determines whether a new number can extend the subsequence. A smaller tail allows more flexibility for future numbers to be added.
Why Store the Smallest Possible Tail?
For a subsequence of a given length, the smaller the tail, the more room there is for future numbers to extend the subsequence.
By maintaining the smallest possible tail for each length, we ensure that the subsequences represented by the tails array are as flexible as possible.
This flexibility allows us to efficiently build the LIS without explicitly constructing all possible subsequences.
Example Walkthrough:
Let’s consider the input array [3, 1, 8, 2, 5] and see how the tails array evolves:

Start with an Empty tails Array:

tails = []
Process Each Number:

3:
tails is empty, so append 3.
tails = [3]
1:
1 is smaller than 3 (the current tail), so replace 3 with 1.
tails = [1]
8:
8 is greater than 1, so append 8.
tails = [1, 8]
2:
2 is smaller than 8 but greater than 1. Replace 8 with 2.
tails = [1, 2]
5:
5 is greater than 2, so append 5.
tails = [1, 2, 5]
Final tails Array:

tails = [1, 2, 5]
The length of tails is 3, which is the length of the LIS.
Why Does This Work?
The tails array does not represent the actual LIS but helps us efficiently track the potential LIS length.
Each element in tails corresponds to the smallest possible tail of an increasing subsequence of a specific length:
tails[0] is the smallest tail of an increasing subsequence of length 1.
tails[1] is the smallest tail of an increasing subsequence of length 2.
tails[2] is the smallest tail of an increasing subsequence of length 3, and so on.
How Binary Search Helps:
When processing a number, we use binary search to find its position in the tails array:
If the number is larger than all elements in tails, it extends the LIS, so we append it.
If the number can replace an element in tails, we replace the first element in tails that is greater than or equal to the number. This keeps tails optimized for future numbers.
Intuition Behind the Smallest Tail:
By always maintaining the smallest possible tail for each subsequence length, we ensure that the subsequences represented by tails are as "open-ended" as possible.
This allows us to efficiently process each number in the input array and build the LIS in O(n log n) time.
Summary:
The key idea is to use the tails array to track the smallest possible tail values for increasing subsequences of different lengths. This ensures flexibility for future numbers and allows us to efficiently compute the LIS length without explicitly constructing all subsequences.
 */
