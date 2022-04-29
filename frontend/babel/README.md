## Babel

Babel is a compiler , but a compiler that compilte js code to the another js code .
We use babel to transpile our new version js code to the backward compatiable version for old browsers to support that features .

for example some feature like symbol or map and set collection and etc traspiled to the extra js code for old browser like IE to run theme.

### Structure
Babel use AST (Abstract syntax tree) look inside this : 
Source Code --> Original AST --> Transformed AST -->  Output Source Code 
![babel core](https://github.com/tmohammad78/learning/blob/main/frontend/babel/core.png)

### @babel/parser
#### Lexical Analysis
Report error about invalid literals
#### Syntax Analysis 
Transform code to AST & Handle autp semicolon in the code and report error 
about misplaced token 
#### Semantic Analysis 
Check statics ruls of js , like use strict anad report error and invalid variables 
use scop tracker

### @babel/traverse
Use DFS to traverse the tree ``` babel.traverse(ast, { some properties })```

### @babel/generator
It's generate new source code from the AST 

#### Useful links 
AST: https://medium.com/basecs/leveling-up-ones-parsing-game-with-asts-d7a6fc2400ff
https://blog.bitsrc.io/what-is-an-abstract-syntax-tree-7502b71bde27
https://lihautan.com/step-by-step-guide-for-writing-a-babel-transformation/
https://www.youtube.com/watch?v=UeVq_U5obnE&t=3052s&ab_channel=HolyJS

