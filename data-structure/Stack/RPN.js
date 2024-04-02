
import Stack from "./stack.js";

const sample = "3 4 + 2 * 1 +" // 15
const sample2 = "1 3 + 5 * 1 - 4 2 * / 3 *" //// 7.125

function checkRPN(str) {
    const data = str.split(' ')
    const stackData = new Stack()

    data.forEach(item => stackData.push(item))

    data.forEach(token => {
        if(token === '+' || token === '-' || token === '*' || token === '/') {
            let y = Number(stackData.peak())
            stackData.pop()
            let x = Number(stackData.peak())
            stackData.pop()
            switch(token) {
                case "+":
                    stackData.push(x + y)
                    break;
                case "*":
                    stackData.push(x * y)
                    break;
                case "-":
                    stackData.push(x - y)
                    break;
                case "/":
                    stackData.push(x / y)
                    break;
            }
        } else {
            stackData.push(token)
        }  
    });
    return stackData
}

console.log(checkRPN(sample2).peak())