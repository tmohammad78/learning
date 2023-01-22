/// We want to make some parts automatic with new keyword 
function userCreator(name,score){
    this.name = name;
    this.score = score;
}

userCreator.prototype.increment = function() { this.score++ }
userCreator.prototype.login = function() { console.log("Login"); }

const user1 = new userCreator("Will",3)

user1.increment()