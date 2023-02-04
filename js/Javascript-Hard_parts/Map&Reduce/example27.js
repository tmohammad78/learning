const ownReducer = (arr,fn,initial) => {
    for(let i=0 ; i< arr.length ; i++) {
        initial = fn(initial,arr[i])
    }
    return initial;
}

const sum = (a,b) => a + b;
const result = ownReducer([1,2,3,4],sum,0)
console.log(result)