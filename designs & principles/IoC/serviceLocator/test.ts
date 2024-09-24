
import { expect } from 'chai'
import serviceLocator from './ServiceLocator.js'
import { addModule } from './symbols.js'
import { fooSomething } from './moduleA.js'

describe('fooSomething', () => {
  beforeEach(() => {
    serviceLocator.clear()
  })

  it('was tricked into multiplying', () => {
    serviceLocator.add(addModule, { 
      add: (a: number, b: number) => a * b 
    })
    expect(fooSomething()).to.equal(300)
  })

  it('was tricked into subtracting', () => {
    serviceLocator.add(addModule, { 
      add: (a: number, b: number) => a - b 
    })
    expect(fooSomething()).to.equal(-20)
  })
})