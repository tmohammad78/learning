function *createFlow(){
    yield 4
    yield 5
    yield 6
}
const returnNextElement = createFlow()
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()
console.log(element1,element2)