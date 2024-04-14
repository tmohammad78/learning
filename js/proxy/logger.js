export const logger = (obj) => {
    let handler = {
        set(target,key,value) {
            console.log(`${key}: ${target[key]} -> ${value}`)
            return Reflect.set(target,key,value)
        }
    }

    return new Proxy(obj,handler)
}
