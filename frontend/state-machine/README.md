# State Machine 
This is about state machine .
State Machine is made up with these parts : 
* **Finite States**: The only possible states that we have 
* **Events**: The Events like toggle and success
* **Transition**: One way to move from a state to another state
* **Extended State**: States that represents quantitative data (string , number or object) that can be potentially infinite is represented as [extended state](https://en.wikipedia.org/wiki/UML_state_machine#Extended_states) instead. for instance we want to count number of clicking
  
XState is a framework can used in order to design our machine , we can install xstate for react or vue 

### Designing
For design our machine to get better perspective about our machine and states , we can use [exacalidraw](https://excalidraw.com/) . and for development mode we can use inspect from ```@xstate/inspect```

### Extended State
We can update by actions

### Parameterizing 
This is a trick for calling a function when we are in a state or extract our action from the state machine .
we can use a third item as name service that retuned from useMachine , it helps to see events in the useEffect 
we should subscribe that , It's like a observerable .
we can add our function as second argument to the createMachine or we can pass it as second input to the useMachine with actions property.

