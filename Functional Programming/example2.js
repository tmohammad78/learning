function shippingRate(){
  rate = ((size + 1) * weight) + speed
}
var rate;
var size = 20
var weight = 4
var speed = 5 
shippingRate()
console.log(rate); /// 89

size = 8
speed = 6
shippingRate()
console.log(rate) /// 42



///// Part 2
// pure
function addTwo(x,y){
  return x + y
}
// impure
function addAnother(x,y){
  return addTwo(x,y) + z //// Oh , z is indirect input
}



//// Part 3 
// The function seems pure, but in the bigger picture we see , we have a problem 
// so , check function call is more important for use than check function defination alone
function getId(obj){
  return obj.id
}

getId({
  get(){
    return Math.random()
  }
})


////