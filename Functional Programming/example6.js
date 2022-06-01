// The Excercise
function output(text){
  return console.log(text)
}

function printIf(shouldPrint){
  return function(msg){
    if(shouldPrint(msg)){
      output(msg)
    }else {
      output("Not")
    }
  }
}

function not(fn){
  return function test(...args){
    return !fn(...args)
  }
}

function isShortEnough(str){
  return str.length <= 5;
}

function isLongEnough(str){
  return !isShortEnough(str)
}

var msg1 = "Hello"
var msg2 = msg1 + "World"

printIf(isShortEnough)(msg1)
printIf(isShortEnough)(msg2)
printIf(isLongEnough)(msg1)
printIf(isLongEnough)(msg2)




//// After

var output  = console.log.bind(console)
var printf = when(output)
var isLongEnough = not(isShortEnough)

function when(fn){
  return function (predict){
    return function(...args){
      if(predict(...args)){
        return fn(...args)
      }
    }
  }
}

function not(fn){
  return function test(...args){
    return !fn(...args)
  }
}

function isShortEnough(str){
  return str.length <= 5;
}

var msg1 = "Hello"
var msg2 = msg1 + "World"

printf(isShortEnough)(msg1)
printf(isShortEnough)(msg2)
printf(isLongEnough)(msg1)
printf(isLongEnough)(msg2)