# FP
### Procedure
It's a collection of operations and things we need . If our function has no return its defenitley procedure.

#### Example1.js
We think moreNumbers is a function because return a value (it's undefined now) , but it's not .
Because **Functions can only call other function** (In this example Print is a procedure)
The function is a relationship between input and output , it's important to choose a good name that reader undrestand that relationship

### Side Effects
Side effects are both side causes , side indirect inputs and indirect outputs . forexample in the example 2 we see side Effect
We should avoid side effects because invalidate the idea of functions <br />
Avoid them where possible , make them obvious otherwise.
The real story is that we can not have side effect completely because we need it , I/O , Network connetion and read / writing on database , generaring random number , DOM are side effect . 
#### From the Mostly adequate
Any interaction with the world outside of a function is a side effect, which is a fact that may prompt you to suspect the practicality of programming without them. <br />
It is not that we're forbidden to use them, rather we want to contain them and run them in a controlled way.
**The Case for Purity**
pure functions can always be cached by input. This is typically done using a technique called memoization:
See the example7.js
### Pure functions
The function that has direct input and output and has no side effect . like part 2 of example2
The confidence of Purity of function is not binayr , we can not say yes sure this function is pure completely
it's level of confidence . like the part 3 
**Because of that , these are calls not function definiation , whats important for the fucntion call behaves pure or doesn't behave pure** <br />
#### Extract impurity
For make out app better , it's better to extract the part our function that has side effect and put it on the procedure , the reason is to make side effect obvious and for debugging and refactoring or etc in the future , we know that where we have side effect

#### reduce surface 
For refactorting , we can reduce this area and just make sure that from line x to y we have imputiry ,
for some reason we can not change that function so for solution we can wrapper another function or use adapter see example4

## Shaping 
Binary and unary are two shape of function that has difference , For make these different shape to same shape we use HOF , this powerful function make them togheter and they can fit toghether. see example4 part2
We can find a adapter and use high order function to make it easy 

## Point Free
This meaning start with meaning of Equational Reasoning , it's mean that when wa have a equation , if we simple it , it should be true after changes , see [this](https://www.youtube.com/watch?v=BV-TGIMUXaw&t=277s) .  For sample see example5.js <br />
the same meaning is in https://ramdajs.com/docs/#complement


## Closure

### Eager vs Lazy
We have this two feature bu helping of closure , see example7.js for better undrestanding
### lazy
**Pro**: The function might do some expensive computations and we are not sure that the function will ever be called, a good solution would be to run it lazily.<br />
**Con**:The downside of deferring the execution is every time we call the function it will do the expensive computation over and over again.<br />

### Eager
**Pro**: After we did it once we don’t have to do it ever again.
**Con**: if this was also an expensive computation the downside would be a situation where the function never gets called, therefore we wasted time doing expensive computation that we won’t ever use.

### Memoization
When we know a function called multiple times with the same input , we wrapp this function with the memoization function . we should becareful to not momoize every function , it has a memory cost.

### Referential Transparency
When our function is pure , we can guaranty that if we replace the return our function with the place that function called , we have same result . Referential Transparency it matters a lot in the compiler like haskell,but in the JS , It can help us to have confident about that function and don't waste our time with that part code (easy read)

**note**: Function parameter Order: General -> specific  (design a function )