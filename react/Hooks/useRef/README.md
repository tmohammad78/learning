# useRef
We want to reference an element that is outside of the react so you want to synchronize your react app with that.
like using browser api or play and pause a video player without react.

* Important part is that ref is exist even in re-rendering and by updating you don't trigger new renders.
* You can access to this by myRef.current
* When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.
* Don’t read or write ref.current during rendering. If some information is needed during rendering, use state instead

```
const myRef = useRef(0) /// init value
```

## When to use refs 

Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs—often a browser API that won’t impact the appearance of the component. Here are a few of these rare situations:

* Storing timeout IDs
* Storing and manipulating DOM elements, which we cover on the next page
* Storing other objects that aren’t necessary to calculate the JSX.
* If your component needs to store some value, but it doesn’t impact the rendering logic, choose refs.
* You can point a ref to any value. However, the most common use case for a ref is to access a DOM element

### State vs Refs
* State triggers re-render when you change it but refs doesn't
* States are immutable but Refs are mutable and you can change them outside of rendering. but for states you must use the state setting function to modify state variables to queue a re-render.
* You shouldn't read or write the current value during rendering but for state you can read them at any time each render has its own snapshot of state which does not change.
* State doesn't update synchronously but refs is like section ```sample 1```