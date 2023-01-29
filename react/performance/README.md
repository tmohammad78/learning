# Performance Hint for React application

### Initial state 
Sometimes we want to init a value in the state from a function, We should care not to call a function directly in the useState, instead, we should call that function with an anonymous function. [Ref](https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily)<br />
example: wordman-initial-slowdown project. <br />
Because when we pass a function call in the useState , and because js is a single thread when js parse this line it will execute immediately, it takes long to execute that and return that value, but when we pass an anonymous function in it, JS engine asks from React engine and doesn't care to execute that again. it called just one time.

### Push states down 
In some situation , due to having a state in the parent component , we have extra re-rendering and it cause extra rendering , for solving this problem we can push the new states in the new component without notifying parent component , and we have just re-rending in the child component. <br />
so we can separate the application component and create a new component as name game in the wordman project. <br />
Or in package list project we can decouple the state of child and write useState in the child component instead passing them to the child as props. <br />

### Children
When we use children we should know that children is not the child of child component and children is in the tree of parents component. for instance for wordman project , we are passing expensive component as child to the Game comopnent , but we should notice that expensive component is still in the tree of parent component not Game component.

### Reducer, useCallback , useMemo
If you want to persist a value use useMemo , if you want to persist a function and reference use useCallBack .
dispatch is always same , but useCallback can re-create function base specific changes.

### React 17 vs React 18
In React 17, It says, that everything is urgent, do it all, But React 18 says some things are very urgent do them first, and some things can wait, do the urgent stuff first. (Concurrency model)
