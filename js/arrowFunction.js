// Arrow function
const a = () => {}
// don't have their own bindings to this, arguments or super, and should not be used as methods.

// don't have access to the new.target keyword.
// aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
// cannot be used as constructors

const obj = {
  count : 0,
  testArrow: () => console.log("Arrow function",this,this.count),
  testFunctionKey: function(){
    return console.log("function",this,this.count)
  }
}

obj.testArrow() // Arrow function {} undefined
obj.testFunctionKey() 
// function {
//   count: 0,
//   testArrow: [Function: testArrow],
//   testFunctionKey: [Function: testFunctionKey]
// } 0

const obj1 = {
  count : 10,
  doSomethingLater : function (){
      setTimeout(function(){ // the function executes on the window scope
          this.count++;
          console.log(this.count);
      }, 300);
  }
}

obj1.doSomethingLater(); // console prints "NaN", because the property "count" is not in the window scope.


var obj2 = {
  count : 10,
  doSomethingLater : function(){
      // The traditional function binds "this" to the "obj" context.
      setTimeout( () => {
          // Since the arrow function doesn't have its own binding and
          // setTimeout (as a function call) doesn't create a binding
          // itself, the "obj" context of the traditional function will
          // be used within.
          this.count++;
          console.log(this.count);
      }, 300);
  }
}

obj2.doSomethingLater();