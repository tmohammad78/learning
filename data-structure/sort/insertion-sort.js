

const insertionSort = (arr) => {
    for(let i = 1; i< arr.length ; i++ ) {
        let currentValue = arr[i];
        let j = i - 1
        while(j >=0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j]; /// shift
            j--
        }
        arr[j + 1] = currentValue; /// insertion
    }
}

const arr = [2,5,3,0,2,3,0,3,0,1,3,10]

console.log(insertionSort(arr))