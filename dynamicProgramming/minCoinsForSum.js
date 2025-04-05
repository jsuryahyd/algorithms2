const memo = {}
function minCoins(total, coins){
	if(memo[total]) return memo[total]
	if(total === 0) return 0
	let min = Infinity
	for(let coin of coins){
			if(total - coin < 0) continue
			min = Math.min(minCoins(total - coin, coins) + 1, min)
	}
	memo[total] = min
	return min

}

function minCoinsBottomUp(total, coins){
		const memo = Array(total+1).fill(Infinity);
		memo[0] = 0
		for(let i=1;i<=total;i++){	
			for(let coin of coins){
				if(i-coin < 0) continue;
				memo[i] = Math.min(memo[i], memo[i-coin]+1)
				console.log(memo)
			}
		}
		return memo[total]
}

console.log('testing...')
// expect(minCoins(13, [ 1,4,5])).to.be(3)
// expect(minCoins(150, [ 1,4,5])).to.be(30)
// expect(minCoins(95, [ 1,4,5])).to.be(19)
// expect(minCoinsBottomUp(150, [ 1,4,5])).to.be(30)
expect(minCoinsBottomUp(6, [ 2,4,5])).to.be(2)
expect(minCoins(150, [ 2,4,5])).to.be(30)
console.log('tests passed')