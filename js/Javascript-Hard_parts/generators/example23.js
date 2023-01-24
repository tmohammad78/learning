function *createFlow(){
  let num = 10
  let newNum = yield num
  yield 5 + newNum
  yield 6
}

const returnNextElement = createFlow()
const result1 = returnNextElement.next() // 10
const result2 = returnNextElement.next(20) // 25
console.log(result1,result2)