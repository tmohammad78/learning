/**
* Imperative version of code
*/
const countElement = document.getElementById("count")
function setCount() {
    let count = Number(countElement.textContent)
    count += 1
    countElement.textContent = count
}