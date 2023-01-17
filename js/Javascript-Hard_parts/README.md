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
and other things like timers store in callback queue