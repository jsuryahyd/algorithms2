class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

/**
 *         a
 *       / \
 *      b   c
 *     / \   \
 *    d   e   f
 */
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//============================================

/**
 *
 * @param {TreeNode} root root node
 */
function depthFirstTraversal_loop(root) {
  const yetToTraverse = [root];
  let currentNode = null;

  while (yetToTraverse.length) {
    currentNode = yetToTraverse.pop();
    console.log(currentNode.val);
    if (currentNode.right) yetToTraverse.push(currentNode.right);
    currentNode.left && yetToTraverse.push(currentNode.left);
  }
}

/**
 *
 * @param {TreeNode} root root node
 */
function depthFirstTraversal_recursion(root) {
  if (!root) return [];
	console.log(root.val)
	const left = depthFirstTraversal_recursion(root.left);
  const rightValues = depthFirstTraversal_recursion(root.right);
	const traversed = [root, ...left, ...rightValues]
  // console.log(traversed)
  return traversed;
}
console.group('depthFirst - loop')
depthFirstTraversal_loop(a);
console.groupEnd()
console.group('depthFirst - recursion')
depthFirstTraversal_recursion(a);
console.groupEnd()

//============================================

function breadthFirstTraversal(root){
	let current = null;
	const yetToBeTraversed = [root]

	while(yetToBeTraversed.length){
		current = yetToBeTraversed.pop();
		console.log(current.val)
		current.left && yetToBeTraversed.unshift(current.left)
		current.right && yetToBeTraversed.unshift(current.right)
	}
}

console.group('breadthFirst')
breadthFirstTraversal(a)
console.groupEnd()