
// perf_hooks is a underhood of nodejs and we can use it without downloading a new library , also we can use 
// PerformanceObserver in the react app 



const { performance } = require('perf_hooks')

let iteration = 1e7;

const a = 1 ;
const b = 2;

const add = (x,y) => x + y

performance.mark("start")

while(iteration--){
    add(a,b)
}

performance.mark("end")
performance.measure("My Special Benchmark",'start','end')
const [measure] = performance.getEntriesByName("My Special Benchmark")
console.log(measure)