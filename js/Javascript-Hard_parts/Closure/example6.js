///// Calling a function once

function once(){
    let executed = false
    return function (){
        if(!executed) {
            executed = true;
            console.log("Calling Once")
        }
    }
}

const print = once()
print()
print()