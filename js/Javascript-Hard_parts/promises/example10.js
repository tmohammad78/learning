function display(data){
    console.log(data)
}

const futureData = fetch("https://api.twitter.com/tmohammad78/2")
futureData.then(display)

console.log("Me First")
