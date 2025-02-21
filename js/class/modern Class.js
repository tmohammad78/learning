log = console.log

class userCreator {
  constructor(name,score) {
    this.name = name
    this.score = score
  }

  sayName() {
    console.log("Hi I am",this.name)
  }
  increment() {
    this.score++
  }
}

const user1 = new userCreator("Mohammad",12)
const user2 = new userCreator("Ali",11)

user1.sayName()

class paidUserCreator extends userCreator {
  constructor(paidName,paidScore,accountBalance){
    super((paidName,paidScore))
    this.accountBalance = accountBalance
  }

  increaseBalance () {
    this.accountBalance++
  }

}


const paidUser1 = new paidUserCreator("Alysa",12,12)

paidUser1.increaseBalance()

paidUser1.sayName()