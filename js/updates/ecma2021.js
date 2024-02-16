function log(data) {
    console.log(data)
}

////// 1. Replace all

log("abbbbabbb".replaceAll('b','g'))


//// 2. Promise .any
/**
 * When we are intrested in first fulfilled promise
 */
const prmoises = [
    Promise.reject('Error A'),
    Promise.reject('Error B'),
    Promise.resolve('result')
]

Promise.any(prmoises).then((result) => log(result)) //// result


/// 3. logical assignment operators
let a = 1
let b = 0

a ||= b
a &&= b 
a ??= b

//// 4. Separators
const h = 123_122_222

/// 5. WeakRefs 
 //// https://github.com/tc39/proposal-weakrefs
