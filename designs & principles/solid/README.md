# Solid Principles

In Frontend cases:
## 1. Single-responsibility principle
1. A component should do a single thing, like presentation component.

## 2. Open Close Principles
1. In the Vue component, use slot,template to be open for extension and close for modification or in the React component use ```...props``` to make it possible.
2. 
## 3. Liskov Substitution Principles
In the frontend, it's like you should separate components like button if they have different behavior, for instance, if you have a button that has a icon, it's different to button component that hasn't. but I think in frontend we want to make it dynamic component.

## 4. Interface Segregation Principles
1. Separate your inteface if you see they are different and do not makes them dynamic
2. For instance, if you have an interface for an object and you're passing it to another component that use inner property of that object, don't use same interface and separate them.


## 5. Dependency Inversion

1. Extract your API calls in a service file or different file then call that service class or function in the component, Don't call api directly in the component
2. 