## useCallback
To cache function declaration, With this hook we can cache it and after re rendering return the same function, it get a list of dependencies, if one of them change, the function will create again.
* Note: Function is not executed , it's just declared.
* For see effects of this hook you should memo the child component then pass callback function to child component
* We should use both of them (memo and callback) , if we use memo and not callback , it cause that in each re-rendering , function has new reference so useMemo check props and see that props has changed , so it will re-render child component again.

## Custom hook
For custom hooks its better to use useCallback for each function in the component.

## Dependency
without dependency, it will create a function in each rerendering