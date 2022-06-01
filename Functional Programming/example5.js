//// Bofore
function isOdd(v){
  return v % 2 == 1
}

function isEven(v){
  return !isOdd(v)
}

isEven(4);


/// After
// The good part of this code is , we see that it's obvious ,
// we can see the relation of isOdd and isEven and we know isEven is opposite of that
// it's so cool

function not(fn){
  return function negated(...args){
    return !fn(...args)
  }
}

function isOdd(v){
  return v % 2 == 1;
}

var isEven = not(isOdd)

isEven(4)