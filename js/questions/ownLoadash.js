/// debounce 

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


//// curry
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

