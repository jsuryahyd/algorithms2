

function fib(n,memo={}){
	if(n<=2) return 1;
	if(memo[n]) return memo[n];
	memo[n] = fib(n-1,memo) + fib(n-2,memo)
	return memo[n];
}

expect(fib(7)).to.be(13)
expect(fib(8)).to.be(21)
console.time('30')
expect(fib(30)).to.be(832040)
console.timeEnd('30')

console.time('49')
expect(fib(49)).to.be(7778742049)
console.timeEnd('49')