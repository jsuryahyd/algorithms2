function getSubSequenceLen(nums) {
  // if (nums.length <= 1) return 0;
  // let len = 0;

  // if (nums[0] <= nums[1]) {
	// 	len += 1;
  // }
	// const subSeqLen = getSubSequenceLen(nums.slice(nums.length-2));
	// console.log(nums,nums[nums.length - 2] ,'<=',nums[nums.length-1], nums[nums.length - 2] <= nums[nums.length-1] ? '✔' : "",subSeqLen)

  // return len + subSeqLen;
  const seqLen = {}
  const seq = {}
  for(let i = 0;i<nums.length;i++){
    console.log(i)
    seq[i] = Array(nums.length).fill();
    for(let j=1;j<nums.length;j++){
      console.log(seq[i][seq[i].length-1],"<",nums[j],seq[i][seq[i].length-1]<nums[j]?"✔":"")
      if(seq[i][seq[i].length-1]<nums[j]) {
        seq[i] = [...seq[i],nums[j]]
      }
    }
  }

  for(let i in seq){
    seqLen[i] = seq[i].length
  }
  console.log(seqLen,seq)
  return Math.max(...Object.values(seqLen))
}

  expect(getSubSequenceLen([3, 1, 8, 2, 5])).to.be(3);
expect(getSubSequenceLen([5, 2, 8, 6, 3, 6, 9, 5])).to.be(4);
expect(getSubSequenceLen([5, -2, 8, -6, -3, 0, 6, 9, 5])).to.be(6);
// console.log(getSubSequenceLen([5, 2, 8, 6, 3, 6, 9, 5]))
// ?????????????????????????????????????
// ???????????????????????????????????/??

// ????????????????????????????????????????