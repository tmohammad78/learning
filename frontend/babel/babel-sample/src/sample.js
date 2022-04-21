const a = () => {
  return "This is sample arrow function"
}
const b = [1,2,3,4,5,6]
const c = b.map(item => item*2 + 1 ).filter(item => item > 5)

const newMap = new Map({
  a:"1",
  3:"33"
})


  
let promiseObj = Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

promiseObj.then(
  () => {
    console.log("Promise success");
  },
  () => {
    console.log("Promise Failed");
  }
);
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

gen.next().value
gen.next().value
gen.next().value