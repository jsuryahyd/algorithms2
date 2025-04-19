/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
     1          2     3        4
    2   3  4  3   4   4
   3 4  4
    4
 */
		var combine = function(n, k) {
			if(n === k) return [Array(k).fill(0).map((_,i)=>i+1)]
			if(n === 0 || k === 0) return []
	
			const result = []
			let current = []
	
			function backtrack(start){
					if(current.length === k) {
							result.push([...current]);
							return
					}
	
					for(let i=start;i<=n;i++){
							current.push(i)
							backtrack(i+1)
							current.pop()
					}
			}
	
			backtrack(1)
			return result;
	};

	expect(combine(4, 2)).to.eql([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]])
expect(combine(1, 1)).to.eql([[1]])
expect(combine(2, 2)).to.eql([[1,2]])