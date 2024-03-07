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
  
  function mergeSort(theArray) {
  
    // Base case: single element array
    if (theArray.length <= 1) {
      return theArray;
    }
  
    // Split the input in half
    const middleIndex = theArray.length / 2;
    const left  = theArray.slice(0, middleIndex);
    const right = theArray.slice(middleIndex, theArray.length);
  
    // Sort each half
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
  
    // Merge the sorted halves
    return combineSortedArrays(leftSorted, rightSorted);
  }
  const arr = [5,4,3,21,3,5,23,5,8,3,0]
  console.log(mergeSort(arr))