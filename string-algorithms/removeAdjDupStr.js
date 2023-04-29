function removeAdjDupStr(str, len) {
  let duplicateIdx =  getDuplicateIdx(str, len);
  while (duplicateIdx > -1) {
		str = str.substring(0, duplicateIdx) + str.substring(duplicateIdx + len);
    duplicateIdx = getDuplicateIdx(str, len);
  }
	return str;
}

function getDuplicateIdx(str, k) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[j] !== str[i]) {
        break;
      } else {
        if (j - i + 1 === k) {
          //enough length
          return i;
        }
      }
    }
  }
	return -1
}
console.log(removeAdjDupStr("deeedbbcccbdaa",3));
console.log(removeAdjDupStr("pbbcggttciiippooaais",2));

function optimised_removeAdjDupStr(str,k){

	const groups = [[str[0],1]] //ddcccdaee -> [[d,2],[c,3],[d,1],[a,1],[e,2]]
	// let groupsIdx=0
	for(let i=1;i<str.length;i++){
		const groupsIdx = groups.length - 1; //last item is current item
		if(groups.length/*groups can become empty at later stage*/ && str[i] === groups[groupsIdx][0]){
			groups[groupsIdx][1]++ //increase count
			if(groups[groupsIdx][1] === k){
				//remove the duplicated substring
				// groups[groupsIdx][1] = 0;
				groups.splice(groupsIdx,1);
			}
		}else{
			groups.push([str[i],1])
		}
	}

	//construct the string
	return groups.reduce((acc,grp)=>{
		return acc + grp[0].repeat(grp[1]);
	},"")


}


console.log(optimised_removeAdjDupStr("deeedbbcccbdaa",3));
console.log(optimised_removeAdjDupStr("pbbcggttciiippooaais",2));