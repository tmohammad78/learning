function createObservedArray(callback) {
    const array = []
    const handler = {
        set(target,propertyKey,value, receiver) {
            callback(propertyKey,value)
            return Reflect.set(target,propertyKey,value,receiver)
        }
    }
    return new Proxy(array, handler)
}

const callback = (key,value) => console.log(`${JSON.stringify(key)} = ${JSON.stringify(value)}`);

const observedArray = createObservedArray(callback)

observedArray.push('a')
// "0" = "a"
// "length" = 1