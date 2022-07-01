function TestFn (){
  this.a = "foo";
}
TestFn.prototype.Fn1 = function(name){
  return `Hello ${name}`
}
TestFn.prototype.bb = "wtf"

const obj1 = new TestFn()
// const aa = new TestFn()

console.log(obj1.Fn1("Mohammad"))