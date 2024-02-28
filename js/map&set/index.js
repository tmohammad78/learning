///// creating maps 
/// 1. 
const emptyMap = new Map()
console.log(emptyMap.size) /// 0

/// 2. 
const emptyMap2 = new Map([
    [1,'one'],
    [2,'two'],
    [3,'third']
])

/// 3.
const emptyMap3 = new Map()
.set(1,'one')
.set(2,'two')
.set(3,'third')


///// set,get,has,delete,size , clear
/**
 * .length is based on indices; it is always the highest index plus one.
    .size counts the number of elements in a collection.
 */
const emptyMap4 = new Map()
emptyMap.set(1,2)
console.log(emptyMap.get(1)); /// 2
console.log(emptyMap.delete(1));
console.log(emptyMap.size); /// 0
emptyMap.clear() //// size gets to zero 


//////// iteration

for (const [key, value] of map) {
    console.log(key, value);
    /// 1 , one
    /// 2, two
}

const map = new Map([[1, 'one'], [2, 'two']]);
for (const entry of map.entries()) {
  console.log(entry);
}
// Output:
// [1, 'one']
// [2, 'two']


///// keys, values

Array.from(map2.keys())
const map = new Map([
    ['b', 2],
    ['a', 1],
  ]);

  map.keys() //// {a , b}
/// to convert to array :
Array.from(map.keys()) /// [a,b]
Array.from(map.values()) /// [1,2]

//// Convert to array and object
console.log(Array.from(map)) /// [["b", 2],["a", 1]]
console.log(Object.fromEntries(map)) /// {b: 2, a: 1}


////// Set 


const setData = new Set()
setData.add('red').add("blue")
console.log(setData)
/**
 * Set(2) {red: (...), blue: (...)}
 */

/// delete, has

/// iteration 
const set = new Set(['red', 'green', 'blue']);
for (const x of set) {
  console.log(x);
}
// Output:
// 'red'
// 'green'
// 'blue'