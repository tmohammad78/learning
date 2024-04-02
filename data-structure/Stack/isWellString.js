import Stack from "./stack.js";

function isWell(str) {
    const dataStack = new Stack()
    for(let char of str) {
        if(char == '(' || char == '{' || char == '[') {
            dataStack.push(char)
        } else {
            if(dataStack.isEmpty()) {
                return false
            }
            if( char == ')' && dataStack.peak() !== '(' || 
                char == '}' && dataStack.peak() !== '{' ||
                char == ']' && dataStack.peak() !== '[' ) 
            {
                return false
            }
            dataStack.pop()
        }
    }
    return dataStack.isEmpty()
}

console.log(isWell("()({[]})")) //// true
console.log(isWell("()({[])")) //// false