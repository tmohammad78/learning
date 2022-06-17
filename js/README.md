# Javascript

- Let vs Var vs Const 
- closure
- map & set collection
- strit mode
- Event Loop

### Map
Objects are used for storing keyed collections. Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
#### WeakMap
WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.
usage : 
If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

### Set
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

### Event Loop
Browser JavaScript execution flow, as well as in Node.js, is based on an event loop. It's how javascript code runs and excuted . see eventLoop.js <br />
<img src="https://images.velog.io/images/gtfo/post/03ef68fc-c4bc-4de0-993e-8415d21ed5a2/%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3%E1%84%85%E1%85%A9%E1%84%90%E1%85%A2%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3.gif" alt="event loop" width="250" />

### Promise 
Javascript is single thread , it means it can do his jobs in just one thread , so it seems hard for requesting to server , we should wait a second until get a response and after gettign continue , but it's not . <br />
**it solved the callbakc hell**
Promise is an object , Promise do two job , one thing is it do some action in the web browser api and simultaneously return that object .
the state of promise:
1) pending: initial state, neither fulfilled nor rejected.
2) fulfilled: meaning that the operation was completed successfully.
3) rejected: meaning that the operation failed.
see eventLoop.js
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

### Async/await
Async await is like a promise , but under the hood is using generator and can pause a execution context and 
return that promise object, for error handling we can use try/catch .
