log = console.log

function userCreator(name,score) {
  this.name = name;
  this.score = score
}

userCreator.prototype.sayName = function() {
  console.log("Hi I am",this.name)
}

userCreator.prototype.increment = function() {
  this.score++
}

const user1 = new userCreator("Mohammad",12)
const user2 = new userCreator("Ali",11)

user1.sayName()

function paidUserCreator(paidName,paidScore,accountBalance) {
    userCreator.call(this,paidName,paidScore)
    this.accountBalance = accountBalance
}


paidUserCreator.prototype = Object.create(userCreator.prototype)

paidUserCreator.prototype.increaseBalance = function () {
    this.accountBalance++
}

const paidUser1 = new paidUserCreator("Alysa",12,12)

paidUser1.increaseBalance()

paidUser1.sayName()