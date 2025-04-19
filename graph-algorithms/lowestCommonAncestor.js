
/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
 * @param {*} root 
 * @param {*} p 
 * @param {*} q 
 * @returns TreeNode
 */
function lowestCommonAncestor(root, p, q){
	if(!root || root===p || root === q) return root;//will return null if root is null; will propagate the node up if matches

	const left = lowestCommonAncestor(root.left, p,q)//will be null if root.left is a leaf node
	const right = lowestCommonAncestor(root.right, p, q)

	if(left && right) return root//if both matches, it means this is lca.

	return left || right //if only one matches, this is propagated up, or this is a match and other is its descendant
}


function lca_iterative(root, p, q){
	const parentEdges = new Map()
	const stack = [root]
	while(stack.length){
		let curr = stack.pop()
		if(curr.left )
			{
				stack.push(curr.left)
				parentEdges.set(curr.left, curr)
			}
			if(curr.right){
				stack.push(curr.right)
				parentEdges.set(curr.right, curr)
			}
	}


	//loop over q set and check if pset has any of the number, return the number
	const pSet = new Set()
	let current = p
	while(current){
		pSet.add(current)
		current = parentEdges.get(current)
	}
	let qParent = q
	while(qParent){
		if(pSet.has(qParent)) return qParent
		qParent = parentEdges.get(qParent)
	}

	return null

}




class BinaryTree {
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
function TreeNode(val,left=null, right=null){
	this.val = val
	this.left = left
	this.right = right
	
}

const t1 = new BinaryTree([3,5,1,6,2,0,8,null,null,7,4])
expect(lowestCommonAncestor(t1.tree, t1.getNode(0), t1.getNode(4)).val).to.be(3)
expect(lowestCommonAncestor(t1.tree, t1.getNode(7), t1.getNode(4)).val).to.be(2)
expect(lowestCommonAncestor(t1.tree, t1.getNode(5), t1.getNode(2)).val).to.be(5)


expect(lca_iterative(t1.tree, t1.getNode(0), t1.getNode(4)).val).to.be(3)
expect(lca_iterative(t1.tree, t1.getNode(7), t1.getNode(4)).val).to.be(2)
expect(lca_iterative(t1.tree, t1.getNode(5), t1.getNode(2)).val).to.be(5)