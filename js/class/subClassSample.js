function userCreator(name,age) {
    const newObj = Object.create(userFunctions)
    newObj.name = name;
    newObj.age = age
    return newObj
  }
  
  const userFunctions = {
    increaseAge() {
      this.age += 1
    },
    sayName() {
      console.log(this.name)
    }
  }
  
  const user1 = userCreator("Mohammad",25)
  log = console.log
  
  log(user1.age)
  user1.increaseAge()
  log(user1.age)
  
  function paidUserCreator (paidName,paidScore, accountBalance) {
    const newPaiedUser = userCreator(paidName,paidScore)
    Object.setPrototypeOf(newPaiedUser, paidUserCreatorFns)
    newPaiedUser.accountBalance = accountBalance
    return newPaiedUser
  }
  
  
  const paidUserCreatorFns = {
    increaseBalance() {
      this.accountBalance++;
    }
  }
  
  Object.setPrototypeOf(paidUserCreatorFns, userFunctions)
  const user2 = paidUserCreator("Alysa",12,12)
  user2.increaseBalance()
  user2.sayName()
  
  