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