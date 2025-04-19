export class BinaryTree {
	constructor(arr){
		this.arr =arr
		this.tree = this.toBinaryTree(arr)
	}
	
	getNode(val){
		
		function walk(root, val){
			const curr = root
		if(curr === null) return null;
		if(curr.val === val) return curr;
		const left = walk( curr.left, val)
		if(left) return left
		const right = walk( curr.right, val)
		return right // could be null, then returns null
		}

		return walk(this.tree, val)
	}

 toBinaryTree(arr){
	if(!arr.length) return null
		const root = new TreeNode(arr.shift())
	let stack = [root]
	while(arr.length){
		const curr = stack.shift()
		if(!curr) break;
		let leftVal = arr.shift()
		if(leftVal != null){
			curr.left = new TreeNode(leftVal)
			stack.push(curr.left)
		}
		const rightVal = arr.shift()
		if(rightVal!= null){
			curr.right = new TreeNode(rightVal)
			stack.push(curr.right)
		}
	}
	return root
}

}
export function TreeNode(val,left=null, right=null){
	this.val = val
	this.left = left
	this.right = right
	
}