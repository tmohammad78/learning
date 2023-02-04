/**
 * We want to use function composition to call seductive functions
 */

const multiply2 = (num) => num * 2
const add3 = (num) => num + 3
const divideBy5 = (num) => num /5
const reduce = (arr,fn , initial) => {
    for( let i = 0 ; i< arr.length ; i++) {
        initial = fn(initial,arr[i])
    }
    return initial
}
const runFunctionOnInput = (num, fn) => fn(num)
const result = reduce([multiply2,add3,divideBy5],runFunctionOnInput,11)
console.log(result)

/**
 * Without this , we should write like this
 * multiply2(add3(divideBy(11)))
 * Composition , compose functions in the one execution context
 */