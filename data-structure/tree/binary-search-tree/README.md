# Binary Search Tree
A binary search tree is a binary tree made up of nodes. Each node has a key signifying its value.
Binary search trees help us speed up our binary search as we are able to find items faster.
We can use the binary search tree for the addition and deletion of items in a tree.

The time complexity of operations on Binary Search Trees (BST) are usually based on its height. Thus, a BST with n nodes can be built such that the search operation will take O(n) time. However, it’s considered to be inefficient, because BSTs can perform much better.

A BST is an ordered data structure. The search and delete operations cost O(h) time, where h is the height of the tree. The best case is when h = O(log(n)). However, the worst case is h = O(n). 

## Travers
- Inorder : Traverse from the left subtree to the root then to the right subtree.
- PreOrder: Ttraverse from the root to the left subtree then to the right subtree.raverse from the root to the left subtree then to the right subtree.
- PostOrder: Traverse from the left subtree to the right subtree then to the root.
### Links
https://www.freecodecamp.org/news/binary-search-tree-traversal-inorder-preorder-post-order-for-bst/
https://www.digitalocean.com/community/tutorials/js-tree-traversal