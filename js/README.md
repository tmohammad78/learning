# Javascript

### Map
Objects are used for storing keyed collections. Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
#### WeakMap
WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.
usage : 
If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

### Set
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
