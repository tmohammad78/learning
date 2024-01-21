const selectionSort = (arr) => {
    for(let i =0; i< arr.length ; i++ ) {
        min = arr[i] //// select min number
        indexOfMin = i
        for(let j = i ; j < arr.length ; j++) {
            if(arr[j] < min) {
                min = arr[j]
                indexOfMin = j
            }
        }
        let temp = arr[i];
        arr[i] = arr[indexOfMin];
        arr[indexOfMin] = temp;
    }
    return arr
}

const arr = [2,5,3,0,2,3,0,3,0,1,3,10,-1]

console.log(selectionSort(arr))