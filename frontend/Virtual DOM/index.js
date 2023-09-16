let name = ''; 
let vDOM = createVDOM()
let prevVDOM; 
let elems;

function createVDOM() {
    return [
        ["input", name, handle],
        ["div", `Hello, ${name}!`],
        ["div","Great job!"]
    ]
}

function handle (e) { name = e.target.value }

function convert (node) { 
    const element = document.createElement(node[0])
    /**
     * We can add a guarde base type of element, for instance for input we don't have textContent;
     */
    element.textContent = node[1];
    element.value = node[1];
    element.oninput = node[2];
    return element;
}

function updateDOM() {
    if(elemes === undefined) {
        elems = vDOM.map(convert)
        document.body.append(elems)
    } else {
        prevVDOM = [...vDOM]
        vDOM = createVDOM()
        findDiff(prevVDOM,vDOM)
    }
}

function findDiff(prev,current) {
    for (let i =0 ; i< current.length; i++) {
        if(JSON.stringify(prev[i]) !== JSON.stringify(current[i])) {
            elems[i].textContent = current[i][1]
            elems[i].value = current[i][1]
        }
    }
}

setInterval(updateDOM,15)