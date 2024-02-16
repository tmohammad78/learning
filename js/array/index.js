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
