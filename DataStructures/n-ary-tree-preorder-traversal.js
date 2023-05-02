function traversal(root) {
  if (!root) return [];

  // console.log(root.printTree());
  //dfs

  const _result = [];
  function dfs(root) {
    const stack = [root];
    while (stack.length) {
      const node = stack.shift();
      _result.push(node.val);
      (node?.children || []).reverse().forEach((c) => {
        stack.unshift(c);
      });
      // console.log(stack.map((s) => s.val));
    }
    stack.forEach(dfs);
  }

  dfs(root);
  return _result;
}

function traversal_loop(root) {
	if(!root) return []

	const stack = [root];
	const result = [];


	while(stack.length){
		const current  = stack.pop()
		result.push(current.val)
		current.children.reverse().forEach(c=>stack.push(c))
	}
	return result

}

console.log(traversal_loop(arrayToTree([1, null, 3, 2, 4, null, 5, 6])));
// console.log(traversal(arrayToTree([1, null, 3, 2, 4, null, 5, 6])));
console.log(traversal_loop(arrayToTree([])))
console.log(

  traversal_loop(
    arrayToTree([
      1,
      null,
      2,
      3,
      4,
      5,
      null,
      null,
      6,
      7,
      null,
      8,
      null,
      9,
      10,
      null,
      null,
      11,
      null,
      12,
      null,
      13,
      null,
      null,
      14,
    ])
  )
);

function arrayToTree(arr) {
	if(!arr.length) return null;
  const head = new TreeNode(arr.shift());
  const queue = [head];
  arr.length && arr.shift(); //remove first null
  while (arr.length) {
    const nextEle = arr.shift();
    if (nextEle !== null) {
      const nextNode = new TreeNode(nextEle);
      queue[0].pushChild(nextNode);
      queue.push(nextNode);
    } else {
      queue.shift();
    }
  }
  return head;
}
/**
 *
 * @param {any} val
 * @param {TreeNode[]} children
 */
function TreeNode(val, children = []) {
  this.val = val;
  this.children = children;
  function serialize(c = self) {
    // console.log({this:c})
    return { val: c.val, children: c.children.map((c) => serialize(c)) };
  }
  this.printChildren = () => console.log(this.children.map(serialize));
  this.setChildren = (children) => (this.children = children);
  this.pushChild = (child) => this.children.push(child);
  this.popChild = (_) => this.children.pop();
  this.addChildToFront = (child) => this.children.unshift(child);
  const self = this;
  this.printTree = serialize;
}
