import { BinaryTree, TreeNode } from "../DataStructures/linkedlist/BinaryTree"

function levelOrder(root: TreeNode | null): number[][] {
	if(!root) return []
	
	const result = [[root.val]]
	let stack:TreeNode[] = [root]
	while(stack.length){
		const newStack:TreeNode[] = []
			for(let i=0;i<stack.length;i++){
					if(stack[i].left){
							newStack.push(stack[i].left)
					}
					if(stack[i].right){
							newStack.push(stack[i].right)
					}
				}
				if(newStack.length) {result.push(newStack.map(n=>n.val));stack = newStack;}else stack = []
	}
	return result;
};
const b1 = new BinaryTree([3,9,20,null,null,15,7])
expect(levelOrder(b1.tree)).to.eql([[3],[9,20],[15,7]])
expect(levelOrder(new BinaryTree([7]).tree)).to.eql([[7]])
expect(levelOrder(new BinaryTree([]).tree)).to.eql([])
expect(levelOrder(new BinaryTree([3,5,1,6,2,0,8,null,null,7,4]).tree)).to.eql([[3],[5,1],[6,2,0,8],[7,4]])
expect(levelOrder(new BinaryTree([1,2,3,4,5]).tree)).to.eql([[1],[2,3],[4,5]])
