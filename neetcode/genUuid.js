

function genUuid(){
	console.time('time-taken')
	const now = Date.now() + ""
	const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	let str = ""
	for(let i=0;i<32;i++){
		if(i%2===0)  str += alphabets[Math.floor(Math.random() * alphabets.length)] 
		else  str += now[Math.floor(Math.random() * now.length)] 
	}
	console.timeEnd('time-taken')
	return str;
}

console.log(genUuid())
console.log(genUuid())
console.log(genUuid())