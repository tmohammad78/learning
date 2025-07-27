
Array.prototype.ownMap = function (callbackFn) {
    let result = []
    for(let i = 0 ; i < this.length ; i++) {
      result.push(callbackFn(this[i],i , this))
    }
    return result;
}

Array.prototype.ownFilter = function (callbackFn) {

    let result = []

    for(let index = 0 ;index < this.length ; index++) {
        callbackFn(this[index])
        if(callbackFn(this[index],index, this)) {
            result.push(this[index])
        }
    }

    return result
} 

Array.prototype.ownReduce = function (callbackFn, initialValue) {
    let accumulator
    let startIndex
  
    if(this.length === 0 && initialValue === undefined) {
      throw new TypeError("Reduce of empty array with no initial value");
  
    }
  
    if(this.length === 0) {
      return initialValue
    }
  
    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      accumulator = this[0];
      startIndex = 1;
    }
  
    for (let i = startIndex; i < this.length; i++) {
      if(!(this[i])) continue;
      accumulator = callbackFn(accumulator, this[i], i, this);
    }
    
    return accumulator;
  
}


Function.prototype.ownCall = function (thisArg, ...argArray) {
  let obj = thisArg || globalThis

 const uniqueFnName = Symbol('myCallFn');

  obj[uniqueFnName] = this

  const result = obj[uniqueFnName](...argArray)

  delete obj[uniqueFnName]
  
  return result;
};

Function.prototype.ownApply = function (thisArg, argArray) {

  if (!Array.isArray(argArray)) {
    throw new TypeError('Second argument must be an array or array-like object');
  }
  
  let obj = thisArg || globalThis

 const uniqueFnName = Symbol('myCallFn');

  obj[uniqueFnName] = this

  const result = obj[uniqueFnName](...argArray)

  delete obj[uniqueFnName]
  
  return result;
};

Function.prototype.ownBind = function (thisArg, ...argArray) {
  const originFn = this
  return (...args) => originFn.apply(thisArg, [...argArray, ...args]);
};

////////

Promise.ownAll = function(iterable) {
  let result = []
  let counter = 0
  return new Promise((resolve,reject) => {
    for(let i = 0 ; i < iterable.length ; i++) {
      const res = Promise.resolve(iterable[i])
      res.then((value) => {
        result[i] = value
        counter++
        if (counter === iterable.length) {
          resolve(result)
        }
       }).catch(reject)
    }
  })
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 3000);
});

Promise.ownAll([p0,p1,p2]).then(res => {
  console.log(res)
})

///////// 
Promise.ownRace = function(promises) {
  let isResolved = false
  return new Promise((resolve,reject) => {
    for(let item of promises) {
      const res = Promise.resolve(item)
      res.then((value) => {
        if(value && !isResolved) {
          isResolved = true
          resolve(value)
        }
       }).catch(reject)
    }
  })
}

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p0');
  }, 300);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 200);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2');
  }, 3000);
});

Promise.ownRace([p3, p4, p5]).then(res => {
  console.log(res); /// p1 is result
}).catch(err => {
  console.error(err);
});

//////////
Promise.ownAny = function(promises) {
  let counter = iterable.length; 
  let errors = new Array(counter) 
  
  return new Promise((resolve, reject) => {
    if (counter === 0) {
      reject(new AggregateError(errors, 'All promises were rejected'));
    }

   for(let index = 0 ; index < iterable.length ; index++) {
      const res = Promise.resolve(iterable[index]); // to ensure a promise

      res.then(resolve).catch((err) => {
        errors[index] = err  /// order of error is important
        counter--; 

        if (counter === 0) {
          reject(new AggregateError(errors, 'All promises were rejected'));
        }
      });
   }
  });
}


const p6 = Promise.resolve(2)
const p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 500);
});

const p8 = Promise.reject(3)

Promise.ownAny([p6, p7, p8]).then(res => {
  console.log(res); // 2
}).catch(err => {
  console.error(err);
});



//// Splice
Array.prototype.ownSplice = function (start, deleteCount, ...itemsToAdd) {
  const removed = [];

  // Normalize start index
  if (start < 0) {
      start = this.length + start;
      if (start < 0) start = 0;
  } else if (start > this.length) {
      start = this.length;
  }

  // Clamp deleteCount
  deleteCount = Math.min(deleteCount, this.length - start);

  // Step 1: Extract removed items
  for (let i = 0; i < deleteCount; i++) {
      removed.push(this[start + i]);
  }

  // Step 2: Shift elements after deleted part
  const tail = this.slice(start + deleteCount); // Remaining elements after removed section
  console.log(tail,'ddd')
  this.length = start; // Truncate the array at start

  // Step 3: Add new items
  for (let i = 0; i < itemsToAdd.length; i++) {
      this.push(itemsToAdd[i]);
  }

  // Step 4: Append the tail back
  for (let i = 0; i < tail.length; i++) {
      this.push(tail[i]);
  }

  return removed;
}

log = console.log
const a = [1,2,3,4]
const b = [...a]
log(a.splice(2,1),a)
log(b.ownSplice(2,1),b)