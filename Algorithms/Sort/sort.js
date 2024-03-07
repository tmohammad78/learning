class Sort { 
    sorted = [];

    constructor(arr) {
        this.arr = arr
        this.mergeSort = this.mergeSort.bind(this) /// bind to use this in recursive fn
    }

    print(){ 
        console.log(this.sorted)
    }

    bubbleSort(arr) {
        let swapped;

        do {
          swapped = false;
          for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              swapped = true;
            }
          }
        } while (swapped);
      
        return arr;
    }

    countingSort(arr){
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
    
    insertionSort(arr){
        for(let i = 1; i< arr.length ; i++ ) {
            let currentValue = arr[i];
            let j = i - 1
            while(j >=0 && arr[j] > currentValue) {
                arr[j + 1] = arr[j]; /// shift
                j--
            }
            arr[j + 1] = currentValue; /// insertion
        }
        return arr
    }

    mergeSort(arr) {

        function combineSortedArrays(arrayOne, arrayTwo) {

            let arrayOneIndex = 0;
            let arrayTwoIndex = 0;
            let mergedArrayIndex = 0;
            const mergedArray = [];
          
            // Both arrays have some items left in them.
            while (arrayOneIndex < arrayOne.length && arrayTwoIndex < arrayTwo.length) {
          
              // Choose the smaller of the two items and add it to the
              // merged array.
              if (arrayOne[arrayOneIndex] <= arrayTwo[arrayTwoIndex]) {
                mergedArray[mergedArrayIndex] = arrayOne[arrayOneIndex];
                arrayOneIndex += 1;
              }
              else {
                mergedArray[mergedArrayIndex] = arrayTwo[arrayTwoIndex];
                arrayTwoIndex += 1;
              }
              mergedArrayIndex += 1;
            }
          
            // Grab any lingering items in the first array after we've
            // exhausted the second array
            while (arrayOneIndex < arrayOne.length) {
              mergedArray[mergedArrayIndex] = arrayOne[arrayOneIndex];
              mergedArrayIndex += 1;
              arrayOneIndex += 1;
            }
          
            // Grab any lingering items in the second array after we've
            // exhausted the first array
            while (arrayTwoIndex < arrayTwo.length) {
              mergedArray[mergedArrayIndex] = arrayTwo[arrayTwoIndex];
              mergedArrayIndex += 1;
              arrayTwoIndex += 1;
            }
          
            return mergedArray;
        }
        if (arr.length <= 1) {
            return arr;
        }
        
        // Split the input in half
        const middleIndex = arr.length / 2;
        const left  = arr.slice(0, middleIndex);
        const right = arr.slice(middleIndex, arr.length);
        
        // Sort each half
        const leftSorted = this.mergeSort(left);
        const rightSorted = this.mergeSort(right);
        
        // Merge the sorted halves
        return combineSortedArrays(leftSorted, rightSorted);
    }

    selectionSort(arr){
        for(let i =0; i< arr.length ; i++ ) {
            let min = arr[i] //// select min number
            let indexOfMin = i
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

    sort(typeSort) {
        const sortList = {
            'bubble': this.bubbleSort,
            'counting': this.countingSort,
            'insertion': this.insertionSort,
            'merge': this.mergeSort,
            'selection': this.selectionSort
        }
        this.sorted = sortList[typeSort](this.arr)
        return this
    }
}

const mainArr = [4,3,1,5,0,1,4,-1,50,23,2,8]

const sort = new Sort(mainArr);

sort.sort('selection').print()

sort.sort('insertion').print()

sort.sort('merge').print()