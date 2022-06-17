let newVariable = "a"
newVariable = "b"
console.log(newVariable); /// b 

// difference 
// 1) let vs var 
// with var we can use var keyword for initial again that variable 
var c = "c"             /// let c = "c"
var c = "d"             /// c = "d"
console.log(c); /// d

// 2) Hoisting : Because variable created with var keyword going top in compiling , so when we log this , we get 
// undefind but in let , we get refrence Error
console.log(test); /// undefind  // console.log(test); /// Refrence Err
var test;                        // let test;

// 3) Block Scope: In ES6 we have block scop concept , This feature help us to create variable locally and between {}
// but in ES5 we had function scop that it was scop that wrapped with a function
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    var moo = "Mooo"
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }

  console.log(moo); // Mooo
  console.log(baz); // ReferenceError
}

run(); 


/// Const Variable
// The const variable initialized just one time and the value can not change again 
const a = "test"
a = "test1" // Error

// When we set an object or array in the const , we can re ininital that variable because the array and object 
// are store in the heap memory and we not change the refrence 

const obj = { a:"d"}
obj.a = "dd"