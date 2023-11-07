class Queue{
  constructor(){
    this.queue = []
  }

  enqueue(value){
    this.queue.push(value)
  }

  dequeue(){
    this.queue.shift()
  }

  size(){
    return this.queue.length
  }

  isEmpty() {
    return this.queue.length === 0
  }

  front() {
    return this.queue[0];
  }

  back() {
    return this.queue.at(-1);
  }
}

const queue = new Queue();

queue.isEmpty(); // true
queue.size(); // 0

queue.enqueue(1); // [1]
queue.enqueue(2); // [1, 2]
queue.enqueue(3); // [1, 2, 3]
queue.enqueue(4); // [1, 2, 3, 4]
queue.enqueue(5); // [1, 2, 3, 4, 5]

queue.isEmpty(); // false
queue.size(); // 5;
queue.front(); // 1;
queue.back(); // 5;

queue.items; // [1, 2, 3, 4, 5];

queue.dequeue(); // [2, 3, 4, 5];
console.log(queue);
queue.dequeue(); // [3, 4, 5];
queue.dequeue(); // [4, 5];
queue.dequeue(); // [5];
queue.isEmpty(); // false
queue.dequeue(); // []
queue.isEmpty(); // true
queue.size(); // 0;
