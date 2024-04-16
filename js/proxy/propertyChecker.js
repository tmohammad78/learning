export const checkPropertyHandler = {
    get(target,propKey, receiver) {
        if(typeof propKey === 'string' && !(propKey in target)) {
            return new ReferenceError('Unknown property' + propKey)
        }
        return new Reflect.get(target,propKey,receiver)
    }

    
}

const propertyChecker = new Proxy({}, checkPropertyHandler)

const obj = {
    __proto__: propertyChecker,
    name: "ali"
}

console.log(obj.test); /// ReferenceError: Unknown propertytest