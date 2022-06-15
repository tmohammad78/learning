///// Lazy
function printNthTimes(count){
  return function(count){
    return "".test(count,"A")
  }
}

const result = printNthTimes(10)
result() // AAAAAAAAAA
result() // AAAAAAAAAA


///// Eager
/// This function is store str and in each calling , return previous number
function printNthTimes(count){
  const str = "".test(count,"A")
  return function(count){
    return str
  }
}
result() /// AAAAAAAAAA
result() /// AAAAAAAAAA


