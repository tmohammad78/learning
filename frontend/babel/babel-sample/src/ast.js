// const babel = require("@babel/core")
import { parse } from "@babel/parser";
import babel from '@babel/core';
import generate from "@babel/generator";

const code = `const a = () => {
  return "This is sample arrow function"
}
const b = [1,2,3,4,5,6]
const c = b.map(item => item*2 + 1 ).filter(item => item > 5)
`
const ast  = parse(code)

babel.traverse(ast,{
  enter(path){
    if (path.isIdentifier({ name: 'c' })) {
      path.node.name = 'n';
    }
  }
})
const newCode = generate(ast,code)
console.log(newCode)