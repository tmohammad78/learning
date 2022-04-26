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