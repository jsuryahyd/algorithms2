import { TreeNode } from "./binaryTreeNode";
// import expect from "expect.js";
const a = new TreeNode(4);
const b = new TreeNode(11);
const c = new TreeNode(3);
const d = new TreeNode(5);
const e = new TreeNode(6);
const f = new TreeNode(9);

/**
 *         4
 *       / \
 *      11   3
 *     / \   \
 *    5   6   9
 */
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

function maxPathSum(root) {
  if (!root) return -Infinity; // not zero, because we want to be less than negative values on the other branch
  if (!root.left || !root.right) return root.val;

  const leftVal = maxPathSum(root.left);
  const rightVal = maxPathSum(root.right);

  if (leftVal > rightVal) {
    return root.val + leftVal;
  } else {
    return root.val + rightVal;
  }
}

expect(maxPathSum(a)).equal(21);
console.log(maxPathSum(a))
