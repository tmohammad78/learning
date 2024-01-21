import bubbleSort from "./bubble-sort.js"

class Sort { 
    sorted = [];

    constructor(arr) {
        this.arr = arr
    }

    print(){ 
        console.log(this.sorted)
    }

    bubble() {
        this.sorted = bubbleSort(this.arr)
        return this
    }
}

const sort = new Sort([2,3,1,5,2,3,5]);

sort.bubble().print()