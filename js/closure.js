console.log('createClosure function: \n'); 
function createClosure(num){
  var count = 0 
  return () => {
    count += 1
    console.log(num * count); 
  }
}

const a = createClosure(10);
a(); // 10
a(); // 20
a(); // 30
a(); // 40

console.log('fn function: \n');
const fn = () => {
  let a = 1 ;
  return () => {
    a++;
    console.log(a);
  }
}

const result = fn()
result() /// 2
result() /// 3

console.log('Counter function: \n');
const counter = (initialValue) => {
  let count = initialValue;
  const logger = () => {
    console.log(count);
  }
  return {
    increament: (value) =>  {
      count += value;
      logger();
    },
    decreament: (value) => {
      count -= value;
      logger()
    }
  }
}

let firstCounter = counter(10);
let secondCounter  = counter(0);

firstCounter.increament(2); // 12
secondCounter.increament(9); // 9 
firstCounter.decreament(1); // 11
secondCounter.decreament(4) // 5

console.log('Create pet  function: \n');
var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
console.log(pet.getName());                  // Vivie

console.log(pet.setName("Oliver"));   
console.log(pet.setSex("male"));
console.log(pet.getSex());                   // male
console.log(pet.getName());                  // Oliver