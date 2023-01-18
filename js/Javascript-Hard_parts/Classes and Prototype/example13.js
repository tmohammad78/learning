function userCreator(name,score){
    const newUser  = {}
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    }
    return newUser;
}

const user1 = userCreator("Will",3)
const user2 = userCreator("Til",5)

user1.increment()
console.log(process.memoryUsage());
/// We've created a general function 
/**
 * But There is a big problem with this code , 
 * we are storing increment function for each object that has created 
 * if we have 5000 user , we are duplicate 5000 times our code of function in the memory
 */