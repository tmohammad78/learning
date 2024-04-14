const map = new WeakMap()
export const track = (obj) => {

    const proxy = new Proxy(obj, {
      set(target, key, value) {
        const success = Reflect.set(target, key, value)
  
        if (success) {
          map.set(proxy, [...map.get(proxy), { ...target }])
        }
  
        return success
      }
    })
    map.set(proxy, [{ ...obj }])

    return proxy
}

export const review = (proxy, index) => {
    const history = map.get(proxy)
    if (index === undefined) {
      return history
    }
    if (index < 0) {
      return history[history.length + index - 1]
    }
  
    return history[index]
  }