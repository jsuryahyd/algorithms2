var firstCompleteIndex = function(arr, mat) {
	const rows = Array(mat.length).fill(0)
	const cols = Array(mat[0].length).fill(0)
	for(let idx=0;idx<arr.length;idx++){
			const [i,j]= getCoords(arr[idx],mat)
			
			rows[i]++;
			// console.log(i,j,rows[i],mat.length,idx)
			if(rows[i]===cols.length) return idx
			cols[j]++;
			// console.log(i,j,cols[j],mat[0].length,idx)
			if(cols[j]===rows.length){
				// console.log(mat)
				return idx     }   
	}
	// console.log(rows,cols)
	return -1
};

function getCoords(a,mat){
	for(let i=0;i<mat.length;i++){
			for(let j=0;j<mat[i].length;j++){
					if(mat[i][j] === a){
						// mat[i][j]=0
							return [i,j]
					}
			}
	}
	return [-1,-1]
}

// [[[1,3,4,2],[[1,4],[2,3]]],
// [[2,8,7,4,1,3,5,6,9],[[3,2,5],[1,4,6],[8,7,9]]]].forEach(args=>{
// 	console.log(firstCompleteIndex(...args))	
// })
console.log(firstCompleteIndex([6,2,3,1,4,5],[[5,1],[2,4],[6,3]]))