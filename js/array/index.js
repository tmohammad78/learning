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

/// 8.find
log([1,2,3,4].find(item => item > 2)) /// 3, return first 

/// 9. findIndex

const firstIndex = [1,2,3,4].findIndex((item) => item > 2)
log('first index: ',firstIndex)  /// 3


/// 10. flat
log([1,2,[3,4,5,[6,7,8]]].flat()) // [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]
log([1,2,[3,4,5,[6,7,8]]].flat(2)) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
log([1,2,[3,4,5,[6,7,8]]].flat(Infinity)) // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

/// 11.flatmap
const flatMapTest = ["it's Sunny in", "", "California"];

const result = flatMapTest.flatMap(item => item.split(" "))
log(result) // [ "it's", 'Sunny', 'in', '', 'California' ]


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