function copyArrayManipulate(arr,instrcutions){
    const result = []
    for(let i = 0 ; i< Array.length ; i++) {
        result.push(instrcutions(arr[i]))
    }
    return result;
}

function multiply2(input) { 
    return input * 2 
}

const result = copyArrayManipulate([1,2,3],multiply2)