# Typescript

<img src="https://github.com/tmohammad78/learning/blob/main/typescript/images/ts.png" alt="Typescript" />
TypeScript throws both syntax-related errors and type-related errors at compile time. but in Javascript you get error when you run your application on the web.

## Keywords

#### Union
If you have two things A and B, the union of those things is their sum (everything in A
or B or both)
#### intersection 
intersection is what they have in common (everything in both A and B)

#### Assertion
when we use as keywrod to change a type of variable, you can check sample in notes.ts section 1.

## Compile
Because we don't know which version of chrome or other browsers are used so we should do a process to convert our code that is new version one to the version that are supported by browsers.so we should do two things: 
### Transpile 
We should transpile our code to the older version that is supported by other brwosers. for instance for using ```async/await``` or ```for ... of``` we convert the latest version of js to older one.
### Polyfill
Some web APIs or some functions that are not supported in browser or any moder feature that are missing in Javascript Runtime you're running on. like ```Map and Set```
### TSC
So the TSC has built-in suppport for transpiling your code but for polyfill it hasn't.

so for this part we have some configuration at tsConfig like these :
#### Target 
The Javascript version you want to transpile to: es5 , es2018 or etc.
```
{
  }
  "compilerOptions":{
    "target": "es5" /// to es5
  }
}
```

#### lib 
You need to use polyfill for some feature of browser that browsers doesn't support. 
There are some library that are for polyfill like ```Core js or @babel/polyfill```
```
{
  "compilerOptions": {
  "lib": ["es2015", "es2016.array.includes"]
  }
}
```
# Rules 
There are some notes to attention in writing base on effective typescript book, these notes are at notes.ts file in the projects folder.

## Rule 1: Prefer Type Declarations to Type Assertions
Type assertions make the most sense when you truly do know more about a type than TypeScript does, typically from context that isn’t available to the type checker. 
```see section 1 of notes.ts```
Since you have information that TypeScript does not, a type assertion makes sense here. like HTML DOM or etc.

## Rule 2: Avoid Object Wrapper Types
TypeScript models this distinction by having distinct types for the primitives and their object wrappers ```section 2```

## Rule 3 : Recognize the Limits of Excess Property Checking
See ```section 3```

## Rule 4: Know the Differences Between type and interface
There are some differences between interface and type , for instance with type you can use union, on in interface you have declaration merging , it means you can have two interface with same name and those interface are merged toghether. see ```section 4```

## Rule 5: Use Type Operations and Generics to Avoid Repeating Yourself
In some cases I duplicate some types and interfaces but it's possible to merge them and use generics to obey DRY
see ```Section 5```


## Rule 6: Use Index Signatures for Dynamic Data
In some cases we have some data like a csv that those property have a general type so we make that dynamic but we shouldn't use that in each object because it doesn't tell us the which property has which type so it's better to be explicit see ```Section 6```

## Rule 7: Use Mapped Types to Keep Values in Sync
It's useful trick , when we change a base type sometimes we don't know about that change and it causes some issues in other places because we aren't update, so due to that we can do a trick to force to update the type. ```Section 7```

## Rule 8: Understand Type Widening
when TypeScript is checking your code, a variable has a set of possible values, namely, its type. When you initialize a variable with a constant but don’t provide a type, the type checker needs to decide on one. In other words, it needs to decide on a set of possible values from the single value that you specified. In TypeScript, this process is known as widening. 
To control widening you can use
* const 
* as const assertion
```Section 8```

## Rule 9:  Understand Type Narrowing
 This is the process by which TypeScript goes from a broad type to a narrower one.
* Returning or throwing an error in different type at block 
* instanceof
* Check null 
* use isArray to cehck type
* Dont trust (!) because it's falsy when number is 0 or empty string
* use tagged union for narrowing
* use custom function as name typeGuard for checking types

## Rule 10:  Understand How Context Is Used in Type Inference
In some cases, when we initi a variable , that variablt get a type by default and when we use that as argument we get error about type of that. so we can use ```as const``` or  ```declare a type in front of that``` to solve issue
see ```section 10```

## Rule 11: Prefer Unions of Interfaces to Interfaces of Unions
• Interfaces with multiple properties that are union types are often a mistake
because they obscure the relationships between these properties.
• Unions of interfaces are more precise and can be understood by TypeScript.
• Consider adding a “tag” to your structure to facilitate TypeScript’s control flow
analysis. Because they are so well supported, tagged unions are ubiquitous in
TypeScript code.
see ```section 11```


## Rule 12: Prefer More Precise Alternatives to String Types
It happened many times that we use string type in a place that makes so wide and we should be careful and try to narrow that type without using string because these are string but type checker can not detect them: 
'mohammad' , '1999/13/04' , 'on 13 April in 1999' and etc
see ```section 12```

## Rule 13: Put TypeScript and @types in devDependencies
There are three kinds of dependencies.

1. dependencies: These are packages that are required to run your JavaScript.  When you publish your code on npm and another user installs it, it will also install these dependencies. like react and etc

2. devDependencies:  These packages are used to develop and test your code but are not required at runtime. All types should be in devDependencies like Jest, eslint and @types/react and etc.
   
3. peerDependency: Peer dependencies are a special type of dependency that would only ever come up if you were publishing your own package.

Having a peer dependency means that your package needs a dependency that is 
the same exact dependency as the person installing your package. 

