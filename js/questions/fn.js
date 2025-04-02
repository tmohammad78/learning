//// 1. curry 

log = console.log


/////// pipe 
// https://bigfrontend.dev/problem/what-is-composition-create-a-pipe

const pipe = (fns) => {
    return (x) => {
        let result = x
        for(let fn of fns) {
            result = fn(result)
        }
        return result
    }
}

// const pipe = (fns) => (x) => fns.reduce((acc,fn) => fn(acc) ,x)


////// Simple Jquery with chain

function $(el) {
    // your code here
    const element = typeof el === "string" ? document.querySelector(el) : el;
    
    if (!element) {
      throw new Error("Element not found");
    }
    return {
      css(className, value) { 
        element.style[className] = value
        return this;
      }
    }
  }

//   $('#button')
//   .css('color', '#fff')
//   .css('backgroundColor', '#000')
//   .css('fontWeight', 'bold')



///// Custom Map collection (Create a simple store for DOM element)

class NodeStore {

    store = Object.create(null)
     /**
     * @param {Node} node
     * @param {any} value
     */
    set(node, value) {
      this.store[node] = value
    }
    /**
     * @param {Node} node
     * @return {any}
     */
    get(node) {
      return this.store[node]
    }
    
    /**
     * @param {Node} node
     * @return {Boolean}
     */
    has(node) {
      return !!(node in this.store)
    }
}


// class NodeStore {
//     constructor() {
//         this.store = []
//     }

//     set(node,value) {
//         let found = false
//         for(let i = 0 ; i < this.store.length ; i++) {
//             if(this.store[i][0] === node) {
//                 this.store[i][1] = value
//                 found = true
//                 break;
//             }
//         }
//         if(!found) {
//             this.store.push([node,value])
//         }
//     }

//     get(node) {
//         for (let i = 0; i < this.store.length; i++) {
//             if (this.store[i][0] === node) {
//               return this.store[i][1];
//             }
//         }
//         return undefined
//     }


//     has(node) {
//         for (let i = 0; i < this.store.length; i++) {
//           if (this.store[i][0] === node) {
//             return true;
//           }
//         }
//         return false;
//     }
// }



////// interesting filter

function excludeItems(items, excludes) {
    let data = new Map();

    items.forEach((item, index) => {
      Object.keys(item).forEach(ii => {
        let existing = data.get(ii) || {};
        let arr = existing[item[ii]] || [];
        arr.push(index);
        data.set(ii, { ...existing, [item[ii]]: arr });
      });
    });
  
    let excludedIndices = new Set();
    excludes.forEach(({ k, v }) => {
      if (data.has(k) && data.get(k)[v]) {
        data.get(k)[v].forEach(index => excludedIndices.add(index));
      }
    });
    console.log(excludedIndices)
    // Filter the original items array
    let filteredItems = items.filter((_, index) => !excludedIndices.has(index));
  
    console.log("Filtered Items:", filteredItems);
    return filteredItems;
  }
  
  let items = [
    { color: 'red', type: 'tv', age: 18 },
    { color: 'silver', type: 'phone', age: 20 },
    { color: 'blue', type: 'book', age: 17 }
  ];
  
  const excludes = [
    { k: 'color', v: 'silver' },
    { k: 'type', v: 'tv' },
  ];
  
  excludeItems(items, excludes);
  /// {color: "blue", type: "book", age: 1...}
  
  
//// change order in place 
function sort(items, newOrder) {
  let newArr = [...items]
  newArr.forEach((item, index) => {
    items[newOrder[index]] = item;
  });
  return newArr;
}


///// Implement clearAllTimeout fn

let timerIds = {}

const originalSetTimeout = window.setTimeout;
const originalClearTimeout = window.clearTimeout;


window.setTimeout = function(fn,waitTime) {
  const timerId = originalSetTimeout(fn,waitTime)
  timerIds[timerId] = true
  return timerId
}

window.clearTimeout = function(timeoutId) {
  originalClearTimeout(timeoutId);
  delete timerIds[timeoutId];
};

function clearAllTimeout() {
  Object.keys(timerIds).forEach(timerId => {
    clearTimeout(timerId)
    delete timerIds[timerId]
  })
}



////// binary search 
function binarySearch(arr, target){
  
  let left = 0 
  let right =  arr.length - 1

  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if(target === arr[mid]) {
      return mid
    }
    if(arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1;
    }
  }

  return -1 
}


//// Spy on 
/**
 * This function is responsible to track the main function that is called.
 */

function spyOn(obj, methodName) {
  // your code here
  const spy = {
    calls: []
  }

  const originFn = obj[methodName]

  if(!originFn) {
    throw new Error("Not a Function")
  }
  obj[methodName] = function(...args) {
    spy.calls.push(args)
    return originFn.apply(this,args)
  }

  return spy
}


//// bubble sort 

function bubbleSort(arr) {
  for(let i = 0 ; i< arr.length ; i++) {
    for(let j = i + 1 ; j < arr.length ; j++) {
      if(arr[j] < arr[i]) {
        swap  = arr[j]
        arr[j] = arr[i]
        arr[i] = swap
      }
    }
  }
}