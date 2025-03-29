//// 1. curry 

log = console.log

function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args)
        }
        return (...args2) => {
            return fn(...args,...args2)
        }
    }
}

const join = (a,b,c) => {
    return `${a}_${b}_${c}`
}

const myCurry = curry(join)

log(myCurry(1,2,3))  /// 1_2_3
log(myCurry(1)(2,3)) /// 1_2_3
log(myCurry(1,2)(3)) /// 1_2_3



////// 2.debounce

function debounce(fn, wait) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, wait)
    }
}

const debouncedFn = debounce(() => console.log('Function executed'), 1000);

debouncedFn(); // Call 1
debouncedFn(); // Call 2 (resets timer)
debouncedFn(); // Call 3 (resets timer)

setTimeout(() => {
  debouncedFn(); // Call after delay
}, 1500);


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
  
  