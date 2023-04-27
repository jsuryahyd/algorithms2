function solution(arr) {
	if(arr.length <= 1) return arr.length;
	// const all = Math.max(...arr)
	let start=0;
	let end =0;
	const table = Array(arr.length).fill(0)
	table[0] = 1;
	for(let i=1;i<arr.length;i++){
			table[arr.length - 1]++;
			if(arr[i] === arr[i-1]) continue;
			end = i;

			while(table[arr[start]-1] > 1){
				table[arr[start]-1]--;
				start++
			}
	}


	return end-start+1;
	
}

expect(solution([2,1,1,3,2,1,1,3])).to.be(3)