/**
* Declarative version of code
In this code we are separating the logic of update dom, we do not care
about updating the dom, just we tell setCount and it makes possible for us
*/
const countApp  = {
    getCount: () => {
        const countElement = document.getElementById("count")
        return Number(countElement.textContent)
    },
    setCount: (val) => {
        const countElement = document.getElementById("count")
        countElement.textContent = val
    }
}

function setCount() {
    let count = countApp.getCount()
    if(count > 5) {
        countApp.setCount(0)
    } else {
        countApp.setCount(count + 1)
    }
}