export default class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() {
      return this.top;
   }
    peak() {
        return this.data[this.top-1];
    }
    isEmpty() {
        return this.top === 0;
    }
    pop() {
        if( this.isEmpty() === false ) {
        this.top = this.top -1;
        return this.data.pop(); // removes the last element
        }
    }
    print() {
        var top = this.top - 1; // because top points to index where new element to be inserted
        while(top >= 0) { // print upto 0th index
            console.log(this.data[top]);
            top--;
        }
        }
}