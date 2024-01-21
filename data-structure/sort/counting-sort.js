const countingSort = (arr) => {
    const newArr = [];
    for(let i = 0 ; i < arr.length ; i++) {
        const va = arr[i]
        newArr[va] = (newArr[va] || 0) +  1
    }
    let sortedIndex = 0;
    for (let i = 0; i < newArr.length; i++) {
        while (newArr[i] > 0) {
            arr[sortedIndex++] = i;
            newArr[i]--;
        }
    }
    return arr;
}

const arr = [2,5,3,0,2,3,0,3,0,1,3,10]

console.log(countingSort(arr))