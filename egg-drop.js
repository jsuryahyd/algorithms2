/**
1 2 3 4 5 6 7 8 9 10
alternative:6
optimal: 9


1+ didnotBreak(take another jump->find by looping from this+1 floor)->recursion
1+ didBreak(start from 1)->1...n

 */
function twoEggDrop(n) {
	if(n === 1) return 1
			if(n === 2 ) return 2
	const memo = {}
	function getMinWays(startingFloor, endingFloor){
			if(memo[startingFloor+","+endingFloor]) return memo[startingFloor+","+endingFloor]
			if(endingFloor < startingFloor) return 0//???
			

			let min = Infinity;

			for(let floorNum = startingFloor;floorNum <= endingFloor;floorNum++){
					// console.group(startingFloor+"Floor:"+floorNum)
					//get max of breaking vs non-breaking of this floor
					const numWays = Math.max(1+ floorNum - startingFloor, 1 + getMinWays(floorNum+1,endingFloor))
					// console.log({floorNum, startingFloor, endingFloor, numWays})
					// @ts-ignore
					// console.groupEnd("Floor:"+floorNum)
					min = Math.min(min, numWays)


			}

	memo[startingFloor+","+endingFloor] = min
	return min;

	}

	return getMinWays(1, n)

};
// =
// =
// =
// =
// =
// =

expect(twoEggDrop(11)).to.be(5)
expect(twoEggDrop(5)).to.be(3)
expect(twoEggDrop(100)).to.be(14)