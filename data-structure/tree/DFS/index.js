class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
const dfs = (rootNode,visitFn) => {
    if (!rootNode) return;

    // Visit the current node
    visitFn(rootNode);
  
    // Recursively visit children
    for (const child of rootNode.children) {
      dfs(child, visitFn);
    }

    /**
     *   if (!rootNode) return;

        const stack = [];
        stack.push(rootNode);

        while (stack.length > 0) {
            const node = stack.pop();

            // Visit the current node
            visitFn(node);

            // Push children in reverse order onto the stack
            for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
            }
        }
     */
}

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

root.children.push(node2);
root.children.push(node3);
node2.children.push(node4);
node3.children.push(node5);

// Function to print the node's value
function printValue(node) {
  console.log(node.value);
}

// Perform DFS and print the values of the tree nodes
dfs(root, printValue);