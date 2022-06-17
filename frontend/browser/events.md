# Events 

### Bubbling
When we have three nested element , when we click on inner child , event first fire on child and that element and after it bubble up to the parents node element , for example we click on p tag 
```
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
The alert of p first shown and after div and form fired and so on upwards till the document object.
**note:**most Event bubbled but event like focus not bubbled
#### Event target vs event.currentTarget
The differenc is , event target is related that element that we clicked , but event.currentTarget is related to element that has a currently running handler on it.
#### Stopping bubbling
To stop bubbling we use ``` event.stopPropagation() ``` and  ``` event.stopImmediatePropagation() ``` , there are a little different , first one stop move upwards but on the current element event fired , to stop that we use second.

### Capturing
When we click on nested element , event passed from document to inner child , it's opposite of event bubbling

### Event Delegation
one of the most powerful event handling patters that capturing and bubbling let us , it's event delegation.
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

#### React
Event delegation in react is a little different with native element , in React > 16 event bubbled until Root Element

https://www.freecodecamp.org/news/event-propagation-event-bubbling-event-catching-beginners-guide/