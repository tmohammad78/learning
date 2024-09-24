import serviceLocator from "./serviceLocator.js"
import * as addModule from './moduleB.js'
import * as symbols from "./symbols.js";
import { fooSomething } from './moduleA.js'

serviceLocator.add(symbols.addModule, addModule)

console.log(fooSomething()) // prints 40