function ownMap(arr,fn) {
    let result = []
    for(let i =0 ; i< arr.length ; i++ ) { 
        result.push(fn(arr[i]))
    }
    return result;
}

const action = (value) => {
    return value * 2
}

const result = ownMap([1,2,3,4],action)
console.log(result)