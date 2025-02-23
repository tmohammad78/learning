//// Solution 1 
log = console.log

log("->>>>>>>>> Solution 1 ")
function userCreator(name,score) {
  const newUser = {}
  newUser.name = name;
  newUser.score = score
  newUser.increment = function() {
    this.score++
  }
  return newUser
}

const user1 = userCreator("Ali",12)
const user2 = userCreator("Mohammad",34)

log(user1,user2)


/// solution 2
log("->>>>>>>>> Solution 2")
function userCreator1(name,score) {
  const newUser = Object.create(userCreatorFunctions)
  newUser.name = name
  newUser.score = score
  return newUser
}

const userCreatorFunctions = {
  increment: function() {
    this.score++
  }
}

function userPaid(paidName,paidScore,balance) {
  const newUser = userCreator1(paidName,paidScore)
  Object.setPrototypeOf(newUser,userPaidFunctions)
  newUser.balance = balance
  return newUser
}

const userPaidFunctions = {
  increaseBalance: function() {
    this.balance++
  }
}

Object.setPrototypeOf(userPaidFunctions,userCreatorFunctions)

const user3 = userCreator1("Ali",12)
const user4 = userCreator1("Mohammad",14)
const userPaid1 = userPaid("Alysa",12,12)

user3.increment()
userPaid1.increment()
log(user3,user4,userPaid1)

/// solution 3 
log("->>>>>>>>> Solution 3")
function userCreator3(name,score) {
  this.name = name
  this.score = score
}

userCreator3.prototype.increment = function() {
    this.score++
}

function userPaid3(paidName,paidScore,balance) {
  userCreator3.call(this,paidName,paidScore)
  this.balance = balance
}

userPaid3.prototype = Object.create(userCreator3.prototype)

userPaid3.prototype.increaseBalance = function() {
  this.balance++
}

const user5 = new userCreator3("Ali",12)
const user6 = new userCreator3("Mohammad",14)
const paied2 = new userPaid3("egggg",14,14)
paied2.increaseBalance()
log(user5,user6,paied2)

/// solution 4 
log("->>>>>>>>> Solution 4")
class userCreator4 {
  constructor(name,score) {
    this.name = name
    this.score = score
  }
  increment() {
    this.score++
  }
}

class paidUser4 extends userCreator4 {
  constructor(name,score,balance) {
    super(name,score)
    this.balance = balance
  }
  increaseBalance() {
    this.balance++
  }
}

const user7 = new userCreator3("Ali",12)
const user8 = new userCreator3("Mohammad",14)
const paied4 = new paidUser4("agg",14,14)
paied4.increaseBalance()
log(user7,user8,paied4)