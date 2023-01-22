# Javascript Hard Parts
This is my summarization of the Hard parts of Javascript course from FrontensMasters

### Contents

### Functions and callbacks:

Functions are like objects Which means they have some features as objects.
In example 2 we have a function as name **multiply2** that it's a callback function. we call that function we pass in the high-order function. <br />
HOF keeps our code DRY.

### Closure
We know every function when executes, They have their local memory and don't remember anything. But with closure, we can attach a memory.
In example 5 we see that data is stored in the global, this is possible with a hidden property as name **[[scope]]** that the function `myNewFunction` has. closure gives us a persistent memory. Asynchronous javascript callbacks and promises rely on the closure to persist state in an asynchronous environment. <br />
We can use closure for calling function just once like example 6 or memoizing.

### Asynchronous Javascript
Javascript is a single thread, which means we can run code line by line and we run our code on a single thread.
so for some actions like calling API or getting information from the server. <br />
If we call API synchronously, after calling an API we can't move on to run other codes, It means, It blocks the execution until the response gets back. <br />
Core javascript engine has 3 main parts: 1) Thread of Execution 2) Memory/Variable environment 3) Call Stack
We need Web Browser API and Event loop and callback/task queue and microtask queue. <br />

When we use setTimeout, it will go to the callback Queue and after all things in the code are executed and callstack gets empty other functions from the callback queue go to the call stack.

### Promises
We have Micro task queue that has high priority than callback queue and all promise base objects stores in microtask queue
and other things like timers are stored in callback queue. <br />
Promise deferred functions in a microtask queue and callback functions in a task queue when the Web Browser Feature finishes .
we have another hidden property like onFulfilment , as name onRejection that handles the error handling .
 
### Classes 

In the example 13, there is a problem that if we are duplicating the function in each execution and it's not a good idea so we extract that function and we store that in a separate object and this is a prototype chain. <br />
All Objects in the javascript have their own **--proto--** property. There is another big Object. the prototype that exists all useful objects in it. 
All proto of objects in javascript link to the Object. Prototype in the memory, but with **Object.create** we can control the proto property and customize that. <br />

Classes are like prototype under the hood and they are minimal and less code.
### This 
In the example 15 , We created a new function in the increment function, The problem that javascript has however we are calling this function in the increment function , but **this** keyword doesn't mention to the increment and that links to the global memory and if that couldn't find a **score** , it will create new one in the global memory. <br />
The solution is we can create new variable as name that and pass this in the increment function to **that** and instead of calling this.score++ call that.score++ . Or we can use **call** function to bind this. <br />

**The Arrow Function**
The Arrow functions are lexically scoped. when we execute an arrow function, **this** will determine where the function was saved. Other functions linked to the global, but arrow functions linked to places that they declared. <br />

### New keyword
All things that have been said about prototype chaining and this, all happens when we use **new** keyword underhood, so instead of using that approach we can use new keyword.

* Functions are like objects . All function in their object format have prototype properties and also we can add another property by this notation : **myFunc.store = 8**