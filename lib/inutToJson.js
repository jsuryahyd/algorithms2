// #node
import fs from 'fs'

async function readLines(){
	const w = await fs.readFile('./input',{encoding:"utf-8"})
	return w.split('\n')
}


