function createFlow(array){
    let index = 0 
    const inner = {
        next: function() {
            const element  = array[index]
            index++;
            return element 
        }
    }
    return inner
}

const returnNextElement = createFlow([4,5,6])
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()
console.log(element1,element2)