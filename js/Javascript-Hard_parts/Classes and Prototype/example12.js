/// This is principle of encapsulation , 
const user1 = {
    name: "Will",
    score: 3,
    increment: function () { user1.score++; }
}

user1.increment() //// user1.score -> 4 



////// with dot notation 
const user2 = { }

user2.name = "Tim"
user2.score = 6;
user2.increment = function () {
    user2.score++;
}


const user3 = Object.create(null)

user3.name = "Eva"
user3.score = 9
user3.increment = function () {
    user3.score++;
}

//// WTF , We have repetitive code , we make it better in the next example