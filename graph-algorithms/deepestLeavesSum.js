class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function toBinaryTree(arr) {
	if(!arr.length) return null;
  const head = new TreeNode(arr.shift());

  const queue = [head];
  while (arr.length) {
    let nextEle = arr.shift();
		if(queue[0] === null){
			queue.shift()
			continue;
		}
    queue[0].left = nextEle != null ? new TreeNode(nextEle) : null;
    queue.push(queue[0].left);
    nextEle = arr.shift();

    queue[0].right = nextEle != null ? new TreeNode(nextEle) : null;
    queue.push(queue[0].right);
		queue.shift()
  }
  return head;
}

function deepestLeavesSum(root) {
	if(!root) return null;
  // console.log(root);
  const queue = [{ node: root, level: 1 }];
  const levelWiseSums = [root.val];
  while (queue.length) {
    const node = queue.shift();
    if (node.node.left) {
      queue.push({ node: node.node.left, level: node.level + 1 });
      levelWiseSums[node?.level + 1] =
        (levelWiseSums[node?.level + 1] || 0) + (node.node.left.val || 0);
    }
    if (node.node.right) {
      queue.push({ node: node.node.right, level: node.level + 1 });
      levelWiseSums[node?.level + 1] =
        (levelWiseSums[node?.level + 1] || 0) + (node.node.right.val || 0);
    }
  }
  // console.log(levelWiseSums);
  return levelWiseSums[levelWiseSums.length - 1];
}

console.log(
  deepestLeavesSum(
    toBinaryTree([])
  )
);
console.log(
  deepestLeavesSum(
    toBinaryTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8])
  )
); //15
console.log(
  deepestLeavesSum(
    toBinaryTree([6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5])
  )
); //19
