function display(data) {
  console.log(data);
}

function printHello(){
  console.log("Hello")
}

function blockFor300ms(){ /* An activity that block js thread for 300 ms */}

setTimeout(printHello,0)

const futureData = fetch("https://api.website/items/1")
// future data immediatley returns a promise object with a empty value property
// {
//   value: undefined,
//   onFulfillment: [] // Under the hood onFulfillment runs when the value property has been populated
//  }
futureData.then(display)
// .then on future data lets us put a function inside of the onfulfillment array in the promise object
// onfulfillment is then ran after the value property is populated inside of the promise object
// giving us the data in the argument of the display function
blockFor300ms()

console.log("Me first");
