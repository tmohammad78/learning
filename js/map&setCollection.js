
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

// This is map collection 

const newMap = new Map()
//  To set value in the map
newMap.set("a",2)
newMap.set(2,3)
newMap.set("23","This is test")
newMap.set("key1","value1").set("key2","value2")
console.log(newMap)

/// To iterate Map collection
for( const [key,value] of newMap){
  console.log(key,value)
}

/// to have just values
console.log(...newMap.values())
/// to have just keys
console.log([...newMap.keys()])
const newMap2 = new Map()
newMap2.set(1,"first")
newMap2.set(2,"second")
/// True
expect(newMap2.get(2)).toBe("second")
newMap2.delete(2)
/// True
expect(newMap2.get(2)).toBe(undefined)
