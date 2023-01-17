function display (data) {  console.log(data) }
function printHello() { console.log("Hello") }
function blockFor300ms() { /** Block for 300ms  */}

setTimeout(printHello,0);

const futureData = fetch("api")
futureData.then(display)

blockFor300ms()
console.log("Me First")
