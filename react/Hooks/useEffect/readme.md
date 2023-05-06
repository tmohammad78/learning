## useEffect
useEffect is a React Hook that lets you synchronize a component with an external system.

setup: The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is first added to the DOM, React will run your setup function.After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. After your component is removed from the DOM, React will run your cleanup function one last time.

dependencies: You can pass dependencies or not. it depends

* If you’re not trying to synchronize with some external system, you probably don’t need an Effect.
* If some of your dependencies are objects or functions defined inside the component, there is a risk that they will cause the Effect to re-run more often than needed. To fix this, remove unnecessary object and function dependencies. You can also extract state updates and non-reactive logic outside of your Effect.
*  If your Effect is doing something visual (for example, positioning a tooltip), and the delay is noticeable (for example, it flickers), replace useEffect with useLayoutEffect.
* Effects only run on the client. They don’t run during server rendering.
*  If you find yourself often needing to manually write Effects, it’s usually a sign that you need to extract some custom Hooks for common behaviors your components rely on


## Dependency
* pass dependency, your Effect runs after the initial render and after re-renders with changed dependencies.
* If your Effect truly doesn’t use any reactive values, it will only run after the initial render.
    * Even with empty dependencies, setup and cleanup will run one extra time in development to help you find bugs
* If you pass no dependency array at all, your Effect runs after every single render (and re-render) of your component.


### Note 
You should not pass a function or a object to the dependency because they will create in each rendering and they have different refrence so , you can pass that object in the useEffect and set another variable in the dependency.

### Usage
A timer managed with setInterval() and clearInterval().
An event subscription using window.addEventListener() and window.removeEventListener().
A third-party animation library with an API like animation.start() and animation.reset().


### Notes
Effects are an escape hatch from the React paradigm. They let you “step outside” of React and synchronize your components with some external system.  If there is no external system involved (for example, if you want to update a component’s state when some props or state change), you shouldn’t need an Effect.
for instance see example code of ```sample1.js```