import Stack from "./stack.js";

function normalizePath(path) {
    const stackData = new Stack()
    for(let char of path) {
        if(char == '..' || char == '...') {
            stackData.pop()
        }
    }
    return stackData
}

normalizePath()