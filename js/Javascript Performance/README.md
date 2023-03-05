# Javascript Performance 

Before the starting to refactor some parts of the code to increase performance, It's so important to figure out what's the main goal of our application. for instance maybe our application is like Newyork Times and it's important to show content and header as soon as possible, maybe our application is like a Microsoft word and It's important to user write smoothly. so all of that is related what's our goal. <br />

## Javascript
Javascript is a compiled language and it gets compiled in the user's machine and compiled with just-in-time (JIT) compilation. It happens right before of execution. [link](https://www.freecodecamp.org/news/javascript-under-the-hood-v8/) [turbofan](https://doar-e.github.io/blog/2019/01/28/introduction-to-turbofan/)

### Optimization 

The Optimization `perf_hooks` is an underhood of nodejs and we can use it without downloading a new library, also we can use PerformanceObserver in the react app.

On the other FileSystemHandle, There is a command like --trace-opt command with node that tells us how much this code takes and 
it shows the details of v8 and turbofan in optimizing steps. (benchmark.js) <br />
When we use typescript or flow or reasonML we help to turbo fan because changing the type cause performance issues and waste more time.

https://ponyfoo.com/articles/an-introduction-to-speculative-optimization-in-v8
https://mrale.ph/blog/2015/01/11/whats-up-with-monomorphism.html