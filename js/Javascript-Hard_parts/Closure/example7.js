/// sample memoize by closure
function memoize(fn){
    const cache = new Map()
    return (...args) => {
        const key = JSON.stringify(args);
    
        if (cache.has(key)) {
          return cache.get(key);
        }
    
        const result = fn(...args);
        cache.set(key, result);
    
        return result;
      };
}

function sum(a,b){
    return a + b;
}

const memoizedSum = memoize(sum)
console.log(memoizedSum(1,2)) /// not cache 
console.log(memoizedSum(1,2)) // cache 