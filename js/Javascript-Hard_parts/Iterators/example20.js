/**
 * This is sample iteration that we know about it , but the idea is how make a stream that by calling a function 
 * continously , gives us a next element
 */

// const arr = [2,3,4]
// for(let i=0 ; i< arr.length ; i++){
//     console.log(arr[i])
// }

function createFunction(array){
    let index = 0
    function inner(){
        const element = array[index]
        index++;
        return element
    }
    return inner
}
const nextElement  = createFunction([1,2,4])
console.log(nextElement()) /// 1 
console.log(nextElement()) /// 2
console.log(nextElement()) /// 4