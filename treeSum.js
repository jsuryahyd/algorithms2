class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode(5);
const b = new TreeNode(-3);
const c = new TreeNode(7);
const d = new TreeNode(10);
const e = new TreeNode(2);
const f = new TreeNode(0);

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

function treeSum(root) {
  if (root === null) return 0;
  const leftBranchSum = treeSum(root.left);
  const rtBranchSum = treeSum(root.right);

  return root.val + leftBranchSum + rtBranchSum;
}

expect(treeSum(a)).to.be(21);

function treeSum_Loop(root) {
  if (root === null) return 0;
  let current = null;
  let total = 0;
  let yetTobeTraversed = [root];
  while (yetTobeTraversed.length) {
    const current = yetTobeTraversed.pop();
    total += current.val;
    current.left !== null && yetTobeTraversed.unshift(current.left);
    current.right !== null && yetTobeTraversed.unshift(current.right);
  }
	return total;
}

expect(treeSum_Loop(a)).to.be(21)
