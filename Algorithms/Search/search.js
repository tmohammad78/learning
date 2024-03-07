class Search {
    result;
    constructor(arr) {
        this.arr = arr;
        this.binarySearch = this.binarySearchRecursive.bind(this)
    }

    binarySearchBottomUp(val) {
        let start = 0;
        let end = this.arr.length - 1;
      
        while (start <= end) {
          let mid = Math.floor((start + end) / 2);
      
          if (this.arr[mid] === val) {
            return mid;
          }
      
          if (val < this.arr[mid]) {
            end = mid - 1;
          } else {
            start = mid + 1;
          }
        }
        return -1;
    }

    binarySearchRecursive(val, start = 0, end = this.arr.length - 1) {
        const mid = Math.floor((start + end) / 2);
    
        if (val === this.arr[mid]) {
            return mid;
        }
    
        if (start >= end) {
            return -1;
        }
        
        return val < this.arr[mid] ? this.binarySearch(val, start, mid - 1) : this.binarySearch(val, mid + 1, end);
    }

    print(){ 
        console.log(this.result)
    }

    search(val) {
        this.result = this.binarySearchRecursive(val)
        return this
    }
}

let arr =[0,1,2,3,4,6,100,10000]

const search = new Search(arr)

search.search(100).print() //// 6

search.search('100').print() /// -1 