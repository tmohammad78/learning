class Node {
  constructor(value,next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
 
  constructor() {
    this.head = null
  }

  pushFront(value){
    this.head = new Node(value,this.head)
  }

  pushBack(value) {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = new Node(value);
  }

  size() {
    let counter = 0
    let currentNode = this.head
    while(currentNode) {
      counter++
      currentNode = currentNode.next
    }
    return counter
  }

  search(value) {
    let currentNode = this.head;
    while(currentNode.next && currentNode.next !== value) {
      currentNode = currentNode.next
    }
    return Boolean(currentNode)
  }

  remove(value) {
    if (this.isEmpty()) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        return;
      }

      currentNode = currentNode.next;
    }
  }

  isEmpty() {
    return this.head === null;
  }

}

const a = new LinkedList()
a.pushFront(1)
a.pushFront(2)
a.pushFront(3)
console.log('Whole of LinkedList :' , JSON.stringify(a));
a.pushBack(4)
console.log('\n push back to list:' ,JSON.stringify(a));
console.log('\n This is size of linkedlist:', a.size());
console.log('\n search for 3 node:', a.search(3));
console.log('\n remove node 2,', a.remove(2));
console.log('\n This is size of linkedlist is 3 now after removing:', a.size());