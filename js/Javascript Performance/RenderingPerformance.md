# Rendering Performance

![rendering](https://github.com/tmohammad78/learning/tree/main/js/Javascript%20Performance/images/rendering.png)
# Rendering

At first, the browser creates a Dom tree which is a tree that includes HTML elements, after that it creates CSSDOM where there are CSS classes and styles related to elements, and it creates a render tree which is a combination of both of them.

After all, It’s time to figure out the position of the elements’ base viewport that is calculated in the **Layout** section or another name is **reflow**, in the end, it’s time to paint the element by pixels on the screen which happens by the **Paint** stage.

![renderingPipeline](https://github.com/tmohammad78/learning/tree/main/js/Javascript%20Performance/images/renderingPipeline.png)

# Reflow or Layout

When the geometry of a page changes, the browser should reflow the page.

Reflow is a blocking operation. everything else stops. It consumes a decent amount of CPU.

A Reflow of an element causes a reflow of its parent and children. This is expensive.

### some actions that cause reflow

- Resizing the page
- change the font
- Add or remove classes
- Calculate size or position
- change size or position

So for reduce the reflow we can do this : 

- Change classes at the lowest level of the DOM
- Avoid repeatedly modifying inline style
- Batch DOM manipulate
- Debounce window resize events

## Advice

- Use simple classes or use BEM
- Reduce the affected elements
- Don’t use multiple selectors because the browser needs to figure them out and it takes more time
- Do not check something and do something repeatedly, instead check all things one time and after do the second task on the whole of that. for instance, we are changing the width of a lot of elements so in the bad approach we can get the width and after changing the width, this way is awful, the better way is to get all widths and store them in an array and do the second task.

# Layout Trashing And **Asynchronous Reflow**

it's known as **asynchronous reflow** because it was not forced to run synchronously outside of the scheduled rendering phase

![paint](https://github.com/tmohammad78/learning/tree/main/js/Javascript%20Performance/images/paint.png)

So far It’s a normal way but If the coordinates or styles for the requested element have not been computed yet, the browser *must immediately* compute them via performing reflow. This immediate invocation of the Style and Layout engines to resolve undetermined coordinates is *forced*, therefore referred to as a **forced reflow** (or **synchronous reflow**)

![reflow1](https://github.com/tmohammad78/learning/tree/main/js/Javascript%20Performance/images/reflow1.png)
for instance, if we have this issue it seems like this : 

![reflow2](https://github.com/tmohammad78/learning/tree/main/js/Javascript%20Performance/images/reflow2.png)
If this happens async, you can read information about the position from the cache ([code](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/style/style_cached_data.h;l=19;drc=38321ee39cd73ac2d9d4400c56b90613dee5fe29)), and it’s not so costly. On the other hand, If you invalidate the DOM tree by adding element to the DOM, you’re adding new subset to the DOM tree but that section has no information about the position.

![reflow3](https://github.com/tmohammad78/learning/tree/main/js/Javascript%20Performance/images/reflow3.png)
Later, when asynchronous reflow occurs, each DOM node is assigned styles and positions before being displayed on the screen.

## **Synchronous Reflow**

When we are combining read and write to the DOM, We have a performance bottleneck, like this:

```
const element = document.getElementById('modal-container');

element.classList.add('width-adjust'); // 1. invalidate Layout Tree
element.getBoundingClientRect(); // 2. force a synchronous reflow. This can be SLOW!
```

We invalidate the DOM tree so far it’s okay but next line we are getting the information about the position, but the render tree is not updated[.](http://update.so) so we have this situation:

 

![reflow](https://github.com/tmohammad78/learning/tree/main/js/Javascript%20Performance/images/reflow.png)

## Layout Trashing

If synchronous reflows are invoked multiple times within a single Task / Frame, what's observed is called **Layout Thrashing.**

```
const elements = [ ...document.querySelectorAll('.some-class') ];

// In a loop, force a reflow for each element :(
for (const element of elements) {
    element.classList.add('width-adjust'); // 1. invalidate Layout Tree
    element.getBoundingClientRect(); // 2. force a synchronous reflow. This can be SLOW!
}
```

## Solution

For can separate the read and write like this:

```
const elements = [ ...document.querySelectorAll('.some-class') ];
// Do all reads
const rects = elements.map(element => element.getBoundingClientRect());
// Do all writes
elements.forEach(element => element.classList.add('width-adjust'));
// Done! Asynchronous reflow will compute positions later.
```

or using the requestAnimationFrame API.

## React

In the react application, it happens when we are reading the information in the useEffect. for solving this problem we should use **useLayoutEffect.**

```
function MyComponent() {
    const elementRef = React.useRef();

    // Be careful with Layout APIs in `useEffect`!
    React.useEffect(() => {
        // When does this run? Before or After DOM updates?
        const rect = elementRef.getBoundingClientRect();

        // do something with `rect`
    }, [])

    return (
        <div ref={elementRef}>
        {
            /* more DOM nodes... */
        }
        </div>);
}
```

```
function MyComponent() {
    const elementRef = React.useRef();

    // Use the `useLayoutEffect` hook instead if you are forcing reflow.
    React.useLayoutEffect(() => {
        // This will run after React has flushed DOM updates.
        const rect = elementRef.getBoundingClientRect();

        // Use the values read from `rect`
        // But writing to the DOM here will likely cause more reflow!
    }, [])

    return (
        <div ref={elementRef}>
        {
            /* more DOM nodes... */
        }
        </div>);
}
```

# Painting

Every time you change something other than opacity or a CSS transform you’re going to trigger a paint.

<aside>
💡 Every layout has a painting step, but there are some situations in changing paint you’re not supposed to change the layout. like opacity that changes the color not position

</aside>

# Thread of browser

In the browser there are some threads, like **UI Thread**, **Render Thread,** and **Compositor Thread.**

## UI Thread

UI Thread is a thread that is responsible for UI related to the browser like tabs and etc.

## Render Thread

We call this thread the main thread all things like Javascript or HTML parsing happen here. There is one of these per tab.

## Compositor Thread

Draws bitmaps to the screen via the GPU. The GPU works with OpenGL to make magic happen on your screen. (It’s GPU intensive).

Browser creates some layers under the hood. 

### What kind of stuff gets its own layer?

- The root object of the page
- Object with CSS Transform
- Overflow
- etc

You can use will-change which tells to browser to create a layer. but it’s a trade off

---

The point here is, We can do some work with the compositor thread and make the main thread less busy. like these tasks:

1. Scaling and rotating the bitmaps
2. Applying filters
3. Making bitmaps transparent

# Resources

[https://web.dev/critical-rendering-path-render-tree-construction/](https://web.dev/critical-rendering-path-render-tree-construction/)

[https://web.dev/critical-rendering-path-constructing-the-object-model/#document-object-model-dom](https://web.dev/critical-rendering-path-constructing-the-object-model/#document-object-model-dom)

[https://web.dev/howbrowserswork/#layout](https://web.dev/howbrowserswork/#layout)

[https://www.youtube.com/watch?v=Y5Xa4H2wtVA](https://www.youtube.com/watch?v=Y5Xa4H2wtVA)

[https://chromium.googlesource.com/chromium/src/+/master/docs/how_cc_works.md](https://chromium.googlesource.com/chromium/src/+/master/docs/how_cc_works.md)

[https://www.webperf.tips/tip/layout-thrashing/](https://www.webperf.tips/tip/layout-thrashing/)