# UseState

UseState is a kind of state hook.

There are two parts of this hook: 
1. initial state
2. set function 

### Initial 
You can pass a function to init a state but attention to it : 
The function is pure , with no argument and return any type. But why we should pass function ? 
```
Because React will only call the function when it needs the initial value and it will called one time , but if you pass a function call your function still calling in every redering. This trick called lazy initialization. 
review : https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates
```
### Batch
If you have multi setState in a function, all setState will be done in a one cycle of rendering, this is named batch  
## Return 
UseState return an array that first item is current state and second one is a function to update the state of component

### Set Function 
A function to update state
```
When you pass function , they store in the queue and they will call by order

```
if you do multiple updates within the same event, updaters can be helpful. They’re also helpful if accessing the state variable itself is inconvenient (you might run into this when optimizing re-renders).
```
The set function only updates the state variable for the next render. If you read the state variable after calling the set function,
because of : https://react.dev/learn/state-as-a-snapshot
* If the value you pass to set function is identical , React will skip the re-rendering
* React batches state updates. It updates the screen after all the event handlers have run and have called their set functions.
```
If you want to avoid this rule and change that immediatly you can use flushSync
```

To update a object or array state, you should mute a fresh object or array, you can not change property directly. you can not mute the init data just you can replace it with new one. so for arrays use functions without mutation.