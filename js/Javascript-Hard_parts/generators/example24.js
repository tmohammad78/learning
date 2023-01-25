
/// Async await scratch 
function doWhenDataRecieved(value){
    returnNextElement.next(value)
}

function *createFlow(){
    const data = yield fetch("https://twitter.com/api/tweets/1")
    console.log(data)
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next()

futureData.then(doWhenDataRecieved)