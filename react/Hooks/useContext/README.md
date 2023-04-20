## useContext

```
useContext() always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which you’re calling useContext().
```
The context that you’ve previously created with createContext. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.
 If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context
 ```
 React automatically re-renders all the children that use a particular context starting from the provider that receives a different value. 
 ```

 ### Update
 For updating, You can create a state in the parent component and pass the state to the value of context.