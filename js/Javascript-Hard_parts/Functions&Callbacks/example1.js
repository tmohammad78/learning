function copyArrayAndMultiply2(arr) {
    const output = []
    for( let i =0 ; i< arr.length ; i++){
        output.push(arr[i] * 2)
    }
    return output
}

const myArr = [1,2,3]
const result = copyArrayAndMultiply2(myArr)