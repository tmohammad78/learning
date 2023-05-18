
///// Sample class 
class Point {
  constructor(x,y) { /// to initiate variables
    this.x = x;
    this.y = y
  }
  get myProperty() { //// getter , get data 
    return [this.x,this.y]
  }
  set myProperty(value) { //// setter , to set data
    this.x = value[0];
    this.y = value[1] || this.y
  }
}

const myObject = new Point(1,3)
console.log(myObject.myProperty)
myObject.myProperty = [12,20]
console.log(myObject.myProperty)
myObject.myProperty = [16]
console.log(myObject.myProperty)

/////////////////////////////

class Test  { 
  #priveField = 12

  #privateMethod() {
    console.log("This is private method from test class")
  }

  ThisIsSampleMethod() {
    console.log("This is sample method",this.#priveField)
  }
}

const testClass = new Test()
// testClass.privateMethod() // We can access to private method
testClass.ThisIsSampleMethod()

//////////////////////
/// Static 
class Triple {
  static calculate(n = 1) {
    return n * 3
  }
}
/*
For static items , we add function to class not instance of it, so if we create with new keyword, we
can't access to the field and we can access with nameOfClass.staticMethod.
*/
console.log(Triple.calculate())
const b = new Triple()
console.log(b.calculate); ///// undefind