Custom PubSub

to use this class just use like this 
```
const events = new PubSub({ persistedTopics: ["auth"] });
// Set it at global level for all to consume (also passed as props)
window.fsEvents = events;

```

then in the sub apps
```
const events = window.fsEvents;
```
and use like this 
```
const subID = events?.subscribe("cart", function ({ cart }) {
    setCart(cart);
});
```