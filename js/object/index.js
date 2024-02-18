//// 1. Object assign 
/**
 * Pay attention that object assign make a same reference for inner object, so changing of that, 
 * will change both of them
 * copies all enumerable own properties from one or more source objects to a target object,
 */
const obj1 = { a: 1}
const obj2 = { b: 2 , a: 3}
const obj3 = { h: 3}
const obj4 = Object.assign(obj1,obj2,obj3)
console.log(obj4)  /// { a: 3, b: 2, h: 3 }

const obj5 = Object.assign({}, {a: 3})
console.log(obj5)  /// { a: 3 }

const obj6 = { a: 1, b: { c: 1}}
const obj7 = { a: 1, b: { c: 3}}
const obj8 = Object.assign(obj6,obj7)
console.log(obj8)  /// { a: 1, b: { c: 3 } }

obj8.a =  2
obj8.b.c = 6
console.log(obj7,obj8) /// { a: 1, b: { c: 6 } } , { a: 2, b: { c: 6 } }

/**
 * for copy an object that has deep object we can use structuredClone
 */
const obj9 = structuredClone(obj8)
obj9.b.c = 12
console.log(obj9,obj8) /// { a: 2, b: { c: 12 } } , { a: 2, b: { c: 6 } }

/// 2. Object.create
/**
 * You can create object without inherit prototypes
 */
const obj10 = Object.create(null)
console.log(obj10.__proto__) /// undefined

/// 3. Objcet.entries
const obj11 = {
    name: "Mohammad",
    age: 24,
    phone: '09120000000'
}
for(let [key,value] of Object.entries(obj11)) {
    console.log(key,value)
    /**
     *  name Mohammad
        age 24
        phone 09120000000
     */
}
/** for in vs for of
 * you can get value of arrays and objects with for of, but in for-in, if you have array, you gets the index of those
 * on the other hand, for in iterates all enumerable propertiees
 * it means if you set a new method with prototype, you will see that in iteration with for-in.
 * https://stackoverflow.com/questions/29285897/difference-between-for-in-and-for-of-statements#:~:text=if%20you%20add%20any%20additional%20properties%20to%20the%20array%27s%20prototype%2C%20then%20those%20properties%20will%20also%20appear%20in%20the%20loop.
 * 
 */

/**
 * Converting an Object to a Map
 */
const obj12 = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj12));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}

/// 4. Object.values
console.log(Object.values(obj11)) /// [ 'Mohammad', 24, '09120000000' ]


/// 5. Object.keys
console.log(Object.keys(obj11)) /// [ 'name', 'age', 'phone' ]

/// 6. Object.freeze
/**
 * freeze() returns the same object that was passed into the function. It does not create a frozen copy.
 * freeze is applied just in first layer, if you have inner object, it doesn't applied
 */
const obj13 = {
    firstName: "Mohammad",
    lastName: "Taheri"
}
Object.freeze(obj13)
obj13.name = "Ali"
console.log(obj13) // { firstName: 'Mohammad', lastName: 'Taheri' }

/// sample deep freeze function 
function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Reflect.ownKeys(object);
  
    // Freeze properties before freezing self
    for (const name of propNames) {
      const value = object[name];
  
      if ((value && typeof value === "object") || typeof value === "function") {
        deepFreeze(value);
      }
    }
  
    return Object.freeze(object);
}

/// 7. fromEntries
// The Object.fromEntries() static method transforms a list of key-value pairs into an object.

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
  ]);

const obj14 = Object.fromEntries(entries);

console.log(obj14);
// Expected output: Object { foo: "bar", baz: 42 }
  
/// 8. groupBy
const obj16 = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];
// const obj15 = Object?.groupBy(obj16,({ type }) => type)

// console.log(obj15)
/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

/// 9. hasOwn
// it's static function, so if you create obj with create, you will miss this
console.log(Object.hasOwn(obj16[0],'name')) // true
const obj17 = Object.create(null)
obj17.gender = 'male'
console.log(Object.hasOwn(obj17, 'gender')) // false 

/// 10.hasOwnProperty
/**
 * If you read from an object that created by object.create so you get an error because it doesn't have prototype
 */
// console.log(obj17.hasOwnProperty('gender')) // error throws error - obj17.hasOwnProperty is not a function

/// 12. is
// to check two things are similar
console.log(Object.is(obj17,obj17)) /// true
console.log(Object.is(obj17,{...obj17})) // false
console.log(Object.is(null,null)) // true
console.log(Object.is(2,'2')) // false