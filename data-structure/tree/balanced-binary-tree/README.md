# Balanced Binary Tree

## Tree Height
The Tree height is a longest path from root to any child we have , forexample in this picture the height is 4 
<div style="text-align:center;height:200px;" >
<img src="https://www.baeldung.com/wp-content/uploads/sites/4/2020/09/Balanced-Tree-1.jpg" />
</div>
<mark style="background-color: gray;color:white;">
We can traverse the tree with post-order traversal to compute the height of each node. At each algorithm step, we calculate current node’s height by adding 1 to max(h_{left}, h_{right}), where h_{left} and h_{right} are the height of the left and right subtree respectively. The height of a leaf is considered to be 0.
</mark>

## Balanced Binary Tree

A binary tree is balanced, if, for every node, the heights of its left and right children differ by at most 1. If a node doesn’t have any of the children, then the height of the absent children is -1. Let’s have a look at these two trees:
if the subtrees have heights h1 and h2, then |h1 − h2| ≤ 1.

<div style="text-align:center;height:200px;" >
<img src="https://www.baeldung.com/wp-content/uploads/sites/4/2020/09/Balanced-Tree.jpg"/>
</div>

left picture is not balanced , because -1 - 1 is 2 , 

**The example of a balanced BST is a Red-Black-Tree. The Red-Black-Tree is self-balancing**

https://www.baeldung.com/cs/height-balanced-tree
http://www.cs.ecu.edu/karl/3300/spr16/Notes/DataStructure/Tree/balance.html