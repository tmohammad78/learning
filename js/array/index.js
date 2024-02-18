const log = (val) => console.log(val)

/// 1. concat
let firstArr = [1,2,3,4]
let secondArr = [5,6,7]

log(firstArr.concat(secondArr)) // [1,2,3,4,5,6,7]
log([].concat([1,2,3],[5,6,7],{a: 0}))  // [1, 2, 3, 5, 6, 7, {...}]

/// 2. at
/// 3. copyWithin

log(firstArr.copyWithin(2,1)) //// [1, 2, 2, 3]
log(firstArr.copyWithin(0,1,3)) /// [2, 2, 2, 3]

/// 4. Entries
log(secondArr.entries().next()) // {value: Array(2), done: false}
for (const element of secondArr.entries()) {
  console.log(element); /// [0,5] , [1,6] . [2,7]
}

/// 5. every
log(secondArr.every(num => num > 2)) /// true
log([4,5].every((num,index,arr) => {
  if(index === 0) return true
  return num > arr[index - 1]
})) /// true

/// 6. fill 

/// 7. filter
log([1,2,3,4].filter(item => item > 2)) // [3,4]
/**
 * function filter(arr, filterFunc) {
  const result = [];
  for (const [i, x] of arr.entries()) {
    if (filterFunc(x, i, arr)) {
      result.push(x);
    }
  }
  return result;
}
 */

/// 8.find
log([1,2,3,4].find(item => item > 2)) /// 3, return first 

/// 9. findIndex

const firstIndex = [1,2,3,4].findIndex((item) => item > 2)
log('first index: ',firstIndex)  /// 3

/**
 * 
 function findIndex(arr, callback) {
  for (const [i, x] of arr.entries()) {
    if (callback(x, i, arr)) {
      return i;
    }
  }
  return -1;
}
 */


/// 10. flat
log([1,2,[3,4,5,[6,7,8]]].flat()) // [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]
log([1,2,[3,4,5,[6,7,8]]].flat(2)) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
log([1,2,[3,4,5,[6,7,8]]].flat(Infinity)) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

/// 11.flatmap
const flatMapTest = ["it's Sunny in", "", "California"];

const result = flatMapTest.flatMap(item => item.split(" "))
log(result) // [ "it's", 'Sunny', 'in', '', 'California' ]

function flatMap(arr, mapFunc) {
  const result = [];
  for (const [index, elem] of arr.entries()) {
    const x = mapFunc(elem, index, arr);
    // We allow mapFunc() to return non-Arrays
    if (Array.isArray(x)) {
      result.push(...x);
    } else {
      result.push(x);
    }
  }
  return result;
}


/// 12. forEach 
// it does not wait for promises. Make sure you are aware of the implications 
// while using promises (or async functions) as forEach callbacks.
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum); // it's 0, but the correct answer is 14
// There is no way to stop or break a forEach() loop other than by 
// throwing an exception

/// 13. from
const arr = new Set([1,2,3,4])
const newMap = new Map()

newMap.set(1,2)
newMap.set(2,4)

const newArr = Array.from(newMap)

log(Array.from(arr)) /// [1,2,3,4]
log(newArr[0]) /// [1,2]


/// 14. fromAsync
// iterates the async iterable 
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
[[1, 2], [3, 4]]

/// 15. includes
// to check something exist in the array

log([1,2,3,4,5].includes(1)) /// TRUE

/// 16. indexOf
/// it gets a second argument, as start index 
log([1,2,3,4,5].indexOf(2)) /// 1

// 17. isArray
log(Array.isArray([2,3,34,4])) /// true

/// 18. join
log([1,2,3,4].join(".")) /// 1.2.3.4

/// 19. map
const result2 = [1,2,3,4].map(item => item * 2)
log(result2) /// [2,4,6,8]
/**
 * 
 * function map(arr, mapFunc) {
  const result = [];
  for (const [i, x] of arr.entries()) {
    result.push(mapFunc(x, i, arr));
  }
  return result;
}
 */

/// 20. pop and push
log([1,2,3,4].pop()) /// [1,2,3]
log([1,2,3,4].push(1,3,4)) // [1,2,3,4,1,3,4]

/// 21. reduce

const total = [1,2,3,4].reduce((acc,curr) =>  acc + curr, 0) /// acc is initial value 
const total2 = [1,2,3,4].reduce((acc,curr) => acc + curr)
// if we dont specify initial value, the acc is arr[0] and curr is arr[1]

/// 22. reverse, toReversed
/**
 * Reverse method, mutes the array and return result
 * toReversed method return the new result and doesn't mute the main array
 */
[1,2,3].reverse() /// [3,2,1]

/// 23. shift
[1,2,3,4,5].shift() /// it return 1 , it change the main array
/// you cann use slice, but slice return array not that value

/// 24. slice
// it doesn't change the main array
/// start, to end (not include the end index)
let arr3 = [1,2,3,4,5]
log(arr3.slice(2,4)) /// [3,4]

/// 25. some
// it check items, at least one element
let arr4 = [1,2,3,4,5]
arr4.some(item => item > 3) // it finds at least one element that is bigger than 3

/// 26. sort 
/**
 * Under the hood it uses merge sort,
 * the deafult sort is ascending
 * it mutes the mainn array, if you want to return a new array use toSorted()
 * the return of callback should be a number that the sign of it, indicates the relative order 
 * of the two elements, negative if a less than b, positive if a is greater than b, and zero, if they 
 * are equal
 */
let arr5 = [5,6,2,4,51,6,7,0]

// 27.toSorted
log(arr5.sorted())

/// 28. splice, toSpliced
/**
 * It uses to replace or remove existing elements or adding new elements in place.
 * splice(start,deleteCount, item1, item2 ,,,)
 * it return deleted items and changes the main array 
 * toSpliced is like splice but doesn't mutes the main array
 */
const arr6 = [1,2,3,4,5,6,7,8,9];
const result6 = arr.splice(3,2)
console.log(result6,arr6) //// [4,5] , [1,2,3,6,7,8,9]

/// 29. unShift
/**
 * it adds the begining of array
 */
let arr7 = [1,2,3,4]
log(arr7.unshift(4,5,6)) /// [4,5,6,1,2,3,4]

/// 30. with 
/**
 * it replace the index with neew value as second property
 */
let arr8 = [1,2,4,5,6]
log(arr8.with(4,5))