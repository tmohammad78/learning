class UserCreator {
  constructor(name,score){
    this.name = name;
    this.score = score;
  }

  increment(){ this.score++; }
  login(){ console.log("login") }
}

const user1 = new UserCreator("Eva",12)
use1.increment()