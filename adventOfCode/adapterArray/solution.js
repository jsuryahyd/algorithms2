const w = [80,87,10,122,57,142,134,59,113,139,101,41,138,112,46,96,43,125,36,54,133,17,42,98,7,114,78,67,77,28,149,58,20,105,31,19,18,27,40,71,117,66,21,72,146,90,97,94,123,1,119,30,84,61,91,118,2,29,104,73,13,76,24,148,68,111,131,83,49,8,132,9,64,79,124,95,88,135,3,51,39,6,60,108,14,35,147,89,34,65,50,145,128]

function sortedArray(){
	const sorted = w.sort((a,b)=>a-b)
	return [0,...sorted,sorted[sorted.length-1]+3];
}
const input = sortedArray()
console.log(input)

function diffCount(){
	let ones = 0
	let threes = 0
	for(let i=1;i<input.length;i++){
		const diff = input[i]-input[i-1];
		diff === 1 ? (ones++): diff === 3 ? (threes++) : ('')
	}
	return ones * threes;
}
console.log(diffCount())

function solution(array){

}

function part2(array){

}
//https://www.youtube.com/watch?v=6JIVR5DsERg
