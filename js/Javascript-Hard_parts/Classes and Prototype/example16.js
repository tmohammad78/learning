//// In example 13 we had problems , we were duplicating codes in the memory .
function userCreator(name,score){
    const newUser = Object.create(userFunctionStore)
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionStore = {
    increment: function() { 
        const add = () => { this.score++; } //// This line 
        add()
     },
    login: function(){ console.log("Logged in") }
}

const user1 = userCreator("Will",3)
const user2 = userCreator("Til",5)
user1.increment()