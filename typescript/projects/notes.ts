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

// <<<<<<<<<<<<<<<<<<<<<<<<Section 2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
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

// <<<<<<<<<<<<<<<<<<<<<<<<Section 3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
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

// <<<<<<<<<<<<<<<<<<<<<<<<Section 4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * Rule 4: Types vs interface 
 */

interface ITest1 { 
  name: string
}

interface ITest1 { 
  lastname: string
}

let person: ITest1; //// In this case , ITest1 is merged and have name and lastname field

/// extend
type sampleType = {name : string}
type sampleType2 = {phone: string }
type newSample = sampleType & { lastname : string }

//// extend
interface IExtend  {
  name : string
}
interface INewExtend extends IExtend {
  lastname: string
}

type TypeSample = sampleType2 | sampleType /// Union is just in type 


// <<<<<<<<<<<<<<<<<<<<<<<<Section 5>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
 * Rule 5 :Use Type Operations and Generics to Avoid Repeating Yourself 
 */

/// Before
interface Person {
  firstName: string;
  lastName: string;
}
  interface PersonWithBirthDate {
  firstName: string;
  lastName: string;
  birth: Date;
}

///After
interface Person {
  firstName: string;
  lastName: string;
}
/// use extend to avoid duplication
interface PersonWithBirthDate extends Person {
  birth: Date;
}
//// OR 
type PersonWithBirthDate = Person & { birth: Date };


/// Another example is : 
interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

// first
interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}

// second
type TopNavState = {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
  recentFiles: State['recentFiles'];
};

/// third and better way
type TopNavState = {
  [k in 'userId' | 'pageTitle' | 'recentFiles'] : State[k]
}

//// Better way is here 
/// Pick is example of generic types 
type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;


// <<<<<<<<<<<<<<<<<<<<<<<<Section 6>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
* Rule 6: Use Index Signatures for Dynamic Data
*/


interface IGeneral{ 
  [propery:string]: string
}

const sample: IGeneral = { 
  a: "sd",
  b: "asd",
  c: 2 //// we get error here 
}

/// so it's better to set type of each property

type Vec3D = Record<'x' | 'y' | 'z', number>; /// we say x or y or z are number

type Vec3D = {[k in 'x' | 'y' | 'z']: number};

type motherF = { [k in 'a' | 'b' | 'c']: k extends 'a' | 'b' ? string : number}
const b : motherF = {
    a: "asd",
    b: "3",
    c: 3
}


// <<<<<<<<<<<<<<<<<<<<<<<<Section 7>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
* Rule 7: Use Mapped Types to Keep Values in Sync
*/

interface ScatterProps {
  // The data
  xs: number[];
  ys: number[];
  // Display
  xRange: [number, number];
  yRange: [number, number];
  color: string;
  // Events
  onClick: (x: number, y: number, index: number) => void;
// Note: if you add a property here, update shouldUpdate!
}

function shouldUpdate(
  oldProps: ScatterProps,
  newProps: ScatterProps
  ) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
    if (oldProps[k] !== newProps[k]) {
      if (k !== 'onClick') return true;
    }
  }
  return false;
}

//// After
/// This is a type checker
const REQUIRES_UPDATE: {[k in keyof ScatterProps]: boolean} = {
  xs: true,
  ys: true,
  xRange: true,
  yRange: true,
  color: true,
  onClick: false,
};

function shouldUpdate(
  oldProps: ScatterProps,
  newProps: ScatterProps
  ) {
    let k: keyof ScatterProps;
    for (k in oldProps) {
    if (oldProps[k] !== newProps[k] && REQUIRES_UPDATE[k]) {
    return true;
    }
    }
  return false;
}