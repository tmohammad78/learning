class Node {
  constructor(val){
    this.value = val
    this.left = null;
    this.right = null
  }
}

class BST {
  constructor(){
    this.root = null
    this.deleteNode = this.deleteNode.bind(this)
  }

  create(value){
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode
      return this;
    }
    let current = this.root

    console.log(this.root);
    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      };
      current = current[side];
    };

    while(true){
      if(value === current.value) return this
      if(value < current.value) addSide("left")
      else addSide("right")
    }

  }

  inOrder(){
    let visited = [], current = this.root
    let travers = node => {
      if(node.left)  travers(node.left)
      visited.push(node.value)
      if(node.right) travers(node.right)
    }

    travers(current)
    return visited
  }

  findMinNode(root) {
    if(!root.left) {
      return root
    } else {
      return this.findMinNode(root.left)
    }
  }

  //// it's not complete 
  deleteNode(root,value) {
    if(!root) {
      return root
    }

    if(root.value < value) {
      root.right =  this.deleteNode(root.left,value) 
    } else if(root.value > value) {
        root.left = this.deleteNode(root.right,value) 
    } else {
      //// no child
      if(!root.left && !root.right) {
        root = null
        return root
      }
      //// one child
      if(root.left === null) {
        let temp = root.right
        root = null
        return temp
      } else if (root.right === null){
        let temp = root.left
        root = null
        return temp
      } else {
        const min = this.findMinNode(root)
        root.value = min.value
      }
    }

  }

  insertNode(root,value) {

    if(root === null) {
      root = new Node(value)
      return root
    }

    if(value > root.value) {
      root.right = this.insertNode(root.right,value)
    } else if(value < root.value) {
      root.left = this.insertNode(root.left,value)
    }

    return root
  }

  searchNode(root,value) {
    if(root === null || root.value === value) {
      return root
    }

    if(value > root.value) {
      return this.searchNode(root.right,value)
    }

    return this.searchNode(root.left,value)
  }
}


const tree = new BST();
tree.create(20);
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);

console.log(tree.inOrder()); 