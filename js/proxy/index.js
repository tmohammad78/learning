import { logger } from "./logger.js"
import { track,review } from "./track.js"

const person = { 
    name: "Ali",
    age: 30
}
const person2 = { 
    name: "Hossein",
    age: 30
}

const objWithLog = logger(person)

objWithLog.age = 26   //age: 30 -> 26
objWithLog.name = "Mohammad"  // name: Ali -> Mohammad

const b = track(person2)
b.name = "Omid"
b.age = 10
review(b)

