import serviceLocator from "./ServiceLocator.js"
import { addModule } from "./symbols.js"
import type * as moduleBType from './moduleB.js'

export function fooSomething() {
  const moduleB = serviceLocator.get<typeof moduleBType>(addModule)
  return moduleB.add(10, 30)
}