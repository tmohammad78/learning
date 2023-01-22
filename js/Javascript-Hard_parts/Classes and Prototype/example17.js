/// We want to make some parts automatic with new keyword 
function userCreator(name,score){
    this.name = name;
    this.score = score;
}

userCreator.prototype
userCreator.prototype.increment = function() {
    this.score++
}

const user1 = new userCreator("Will",3)
const user2 = new userCreator("Til",5)
user1.increment()