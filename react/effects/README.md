Effects React
* useEffect
* useLayoutEffect

# useEffect
This is a hook function that helps developers to manager side effects easier in the function components.
- This function is an alternative for componentDidMount, componentDidUpdate, and componentWillUnmount that were used in class components.
* It runs asynchronously. it means this function doest not block the thread, it can only be called after the component has been mounted,

## Pitfalls
UseEffect hook is asynchronous this has a significant drawback in that it can only be called after the component has been mounted. This implies that side effects that depend on the layout of the component cannot be carried out using useEffect. (So to solve this problem, useLayoutEffect exist)

# useLayoutEffect
The useLayoutEffect hook runs synchronously which means it runs immediately after React has performed all the necessary DOM mutations but just before the browser paints the screen.
(
    As I know, painting is a process of rendering, first the required calculation is handled by react and layout is created, then useLayoutEffect is run, then browser paints elements on browser.
)

* React guarantees that the code inside useLayoutEffect and any state updates scheduled inside it will be processed before the browser repaints the screen.

## How works
* The user interacts with the application.
* The components' states change.
* After that, the DOM is altered.
* If the useLayoutEffect dependencies have changed, this method is called to clean up effects from the previous render.
* After cleanup, the useLayoutEffect hook is called.
* Changes are reflected on the browser screen.

## Pitfalls
A major pitfall of this hook according to the official React docs, is that it can hurt app performance. 

The code inside useLayoutEffect and all state updates scheduled from it block the browser from repainting the screen. When used excessively, this makes your app slow. (performance issue is because of sync)

## useLayoutEffect on SSR
Read this for detail.
https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85

### Issues on Github
https://github.com/preactjs/preact/issues/1893

# Resources
https://refine.dev/blog/uselayouteffect-vs-useeffect/#testing-manipulating-the-dom

https://blog.logrocket.com/react-useeffect-vs-uselayouteffect-hooks-examples/

https://github.com/facebook/react/issues/14927
