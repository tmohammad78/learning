## useReducer

You can add reducer to your component. (You can create a sample state machine with reducer)

### Parameters
* Reducer function: How update the state base on action and return next state
* Init: init value 
* Initializer function: should return the initial state

### Return 
Current state and dispatch function

If state is identical , it will skip re rendering , Batch update suppport , and if you log that because the reason of architecture of react , you see old value .