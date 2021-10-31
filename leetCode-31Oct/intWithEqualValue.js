var smallestEqual = function(nums) {
    for(let i =0;i<nums.length;i++){
			if(i%10 === nums[i]) return i;
		}
		return -1
};
[
  {
    input: [
      [0,1,2]
    ],
    output: 0,
  },
  {
    input: [[4,3,2,1]],
    output: 2,
  },
	{
    input: [[1,2,3,4,5,6,7,8,9,0]],
    output: -1,
  }, {
    input: [[2,1,3,5,2]],
    output: 1,
  },
].forEach((a, i) => {
  console.time("idx:" + i);
  expect(smallestEqual(...a.input)).to.eql(a.output);
  console.timeEnd("idx:" + i);
});