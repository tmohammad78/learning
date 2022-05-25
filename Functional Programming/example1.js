function print(x=0,y =0){
  let total = x + y
  console.log(total)
}

function moreNumbers(x=3,...args){
  return print(x,...args)
}

moreNumbers();
moreNumbers(1,5)

function calculate(a,b){
  return a + b
}