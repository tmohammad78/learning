import { BehaviorSubject } from "rxjs"

export const rxify = obj => {
  let objSubject = new BehaviorSubject(obj)
  let fn = function(pipe = x => x) {
    return objSubject.pipe(pipe)
  }

  let subjectMap = {}
  let handler = {
    get(target, key) {
      return (pipe = x => x) => {
        let subject = subjectMap[key]
        if (subject) return subject

        let value = Reflect.get(obj, key)
        subject = new BehaviorSubject(value).pipe(pipe)
        subjectMap[key] = subject
        return subject
      }
    },

    set(target, key, value) {
      let passed = Reflect.set(obj, key, value)
      if (passed) {
        subjectMap[key].next(value)
        objSubject.next(obj)
      }

      return passed
    }
  }

  return new Proxy(fn, handler)
}