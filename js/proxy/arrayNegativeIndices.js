const createArray = (...elements) => {

    const handler = {
        get(target, propKey, receiver){
            if(typeof propKey === 'string') {
                const idx = Number(propKey)
                if(idx < 0) {
                    propKey = String(idx + target.length)
                }
            }
            return Reflect.get(target,propKey,receiver)
        }
    }
    return new Proxy(elements, handler)
}

const arr = createArray('a', 'b', 'c');

console.log(arr[-1]) // c 