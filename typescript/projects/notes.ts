/**
 * Section 1 
 * Rule 1: Prefer Type Declarations to Type Assertions
 */

interface IPerson { 
  name: string
}
const APerson: IPerson = { name: "Mohammad" }
const BPerson = {name: "Ali"} as IPerson /// Assertion
const CPerson = <IPerson>{} //// Assertion

//// Typechecker miss the error and it will cause a bug
document.querySelector('#myButton').addEventListener('click', e => {
  e.currentTarget // Type is EventTarget
  const button = e.currentTarget as HTMLButtonElement; ///Assertion
  button // Type is HTMLButtonElement
});

/**
 * Section 2 
 * Rule 2 : Avoid Object Wrapper Types (String, Number, Boolean, Symbol, BigInt)
 */

const a: String = "a"
const b: string = "b" 
// Those are different
function isGreeting(phrase: String) {
  return [
  'hello',
  'good day'
  ].includes(phrase);
  // ~~~~~~
  // Argument of type 'String' is not assignable to parameter
  // of type 'string'.
  // 'string' is a primitive, but 'String' is a wrapper object;
  // prefer using 'string' when possible
}




/**
 * Section 3
 * Rule 3 : Recognize the Limits of Excess Property Checking
 */
interface ITest {
  a: number;
  b: string;
}

const a: ITest = {
  a: 12,
  b: "!@3"
}

const c = {
  a:123,
  b:"123213",
  v:"asd"
}

const d: ITest = c /// we don't get any error 

console.log(d)



