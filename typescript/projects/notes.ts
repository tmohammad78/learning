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

// <<<<<<<<<<<<<<<<<<<<<<<<Section 8>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
* Rule 8: Understand Type Widening
*/

interface Vector3 { x: number; y: number; z: number; }
function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
  return vector[axis];
}

let x = 'x';
let vec = {x: 10, y: 20, z: 30};
getComponent(vec, x); ///The issue is that x’s type is inferred as string, whereas the getComponent function
// expected a more specific type for its second argument. This is widening at work, and
// here it has led to an error.


const x = 'x';
let vec = {x: 10, y: 20, z: 30};
getComponent(vec, x); 

//// for object you can use as const like this : 

const v3 = {
x: 1,
y: 2,
} as const;
 // Type is { readonly x: 1; readonly y: 2; }
 //If you’re getting incorrect errors that you think are due to widening, consider adding
// some explicit type annotations or const assertions.


// <<<<<<<<<<<<<<<<<<<<<<<<Section 9>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
* Rule 9: Understand Type Narrowing
*/

/// Sample narrowing is : 
/// 1. Checking is null or not
const el = document.getElementById('foo'); // Type is HTMLElement | null
if (el) {//// You are exclude type of null , if it's null it doesn't execute
  el // Type is HTMLElement
  el.innerHTML = 'Party Time'.blink();
} else { 
  el // Type is null
  alert('No element #foo');
}
//// throw error 
const el = document.getElementById('foo'); // Type is HTMLElement | null
if (!el) throw new Error('Unable to find #foo');
el; // Now type is HTMLElement
el.innerHTML = 'Party Time'.blink();


//// use instanceof
function contains(text: string, search: string|RegExp) {
if (search instanceof RegExp) {
    search // Type is RegExp
    return !!search.exec(text);
  }
  search // Type is string
  return text.includes(search);
}

/// isArray
function contains(text: string, terms: string|string[]) {
  const termList = Array.isArray(terms) ? terms : [terms];
  termList // Type is string[]
  // ...
}

/// Dont use ! 
function foo(x?: number|string|null) {
  if (!x) {
  x;
 // Type is string | number | null | undefined
  }
}

/// use tagged Union 
interface UploadEvent { type: 'upload'; filename: string; contents: string }
interface DownloadEvent { type: 'download'; filename: string; }
type AppEvent = UploadEvent | DownloadEvent;
function handleEvent(e: AppEvent) {
  switch (e.type) {
  case 'download':
  e // Type is DownloadEvent
  break;
  case 'upload':
  e; // Type is UploadEvent
  break;
  }
}

//// Use typeGuard : 
function isInputElement(el: HTMLElement): el is HTMLInputElement {
return 'value' in el;
}
function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    el; // Type is HTMLInputElement
    return el.value;
  }
  el; // Type is HTMLElement
  return el.textContent;
}

//// type Guard

function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined
}
const members = ['Janet', 'Michael'].map(
who => jackson5.find(n => n === who)
).filter(isDefined); // Type is string[]


// <<<<<<<<<<<<<<<<<<<<<<<<Section 10>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
* Rule 10:  Understand How Context Is Used in Type Inference
*/

function setLanguage(language: string) { /* ... */ }
setLanguage('JavaScript');
 // OK
let language = 'JavaScript';
setLanguage(language); // OK , because you're entering string

///// Now you set type more percise 
type Language = 'JavaScript' | 'TypeScript' | 'Python';
function setLanguage(language: Language) { /* ... */ }
setLanguage('JavaScript');
 // OK
let language = 'JavaScript';
setLanguage(language); //// error , string is not equal to  
// Languge type
// typescript infer type of language in assignment so its string
//// There are two way to solve this problem 
/// 1. use const 
const language = 'JavaScript'; /// The type is Javascript not string
setLanguage(language); 

/// 2. Declare type of that
const language: Language = 'JavaScript'; /// The type is Javascript not string
setLanguage(language); 

/// Or with array or object we have same issue

function panTo(where: [number, number]) { /* ... */ }
panTo([10, 20]);
 // OK
const loc = [10, 20];
panTo(loc);
// Argument of type 'number[]' is not assignable to
// parameter of type '[number, number]'

/// so here we can do two things: 1) use as const 2) declare type
const loc = [10, 20] as const /// 1
const loc: [number,number] = [10, 20]  /// 2



// <<<<<<<<<<<<<<<<<<<<<<<<Section 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
* Rule 11: Prefer Unions of Interfaces to Interfaces of Unions
*/

// For instance we have this interface 
interface Layer {
  layout: FillLayout | LineLayout | PointLayout;
  paint: FillPaint | LinePaint | PointPaint;
}

/// This isn't percise and it cause some probability in the code 
// that will confuse us , so it's better to exclude them in this way : 

interface FillLayer {
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  layout: PointLayout;
  paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer;

/// In this way we have separate types and if its point and not a line , we 
// have paint and layout of that type not any other probability

/// Another approach is to use tags in code to have better 
/// check it called tag union trick in ts .
// we add a tag in each interface 
interface FillLayer {
  type: 'fill';
  layout: FillLayout;
  paint: FillPaint;
}
interface LineLayer {
  type: 'line';
  layout: LineLayout;
  paint: LinePaint;
}
interface PointLayer {
  type: 'paint';
  layout: PointLayout;
  paint: PointPaint;
}
type Layer = FillLayer | LineLayer | PointLayer;

/// And in the code we can narrow that code better like this : 

function drawLayer(layer: Layer) {
  if (layer.type === 'fill') {
    const {paint} = layer; // Type is FillPaint
    const {layout} = layer; // Type is FillLayout
  } else if (layer.type === 'line') {
    const {paint} = layer; // Type is LinePaint
    const {layout} = layer; // Type is LineLayout
  } else {
    const {paint} = layer; // Type is PointPaint
    const {layout} = layer; // Type is PointLayout
  }
}


//// Another example if this section is about relation between some 
/// properties , for instance we have an interface that have 
// birthday and place property that they have optional but if one of them 
// exist the next one is exist too , if we have place so we have birthday defenitly
/// in these cases we can extract those in the one object and with one property in main interface
/// like this : 

/// Before
interface Person {
  name: string;
  // These will either both be present or not be present
  placeOfBirth?: string;
  dateOfBirth?: Date;
}

/// After
interface Person {
  name: string;
  birth?: {
  place: string;
  date: Date;
  }
}

/// In this case we can check that birth exist with just one if block and its more easier
// And also we get error if one of them doesn't exist 

const alanT: Person = {
  name: 'Alan Turing',
  birth: {
  // ~~~~ Property 'date' is missing in type
  //
  // '{ place: string; }' but required in type
  //
  // '{ place: string; date: Date; }'
  place: 'London'
  }
}

// or we can check in this way : 
function eulogize(p: Person) {
  console.log(p.name);
  const {birth} = p;
  if (birth) {
  console.log(`was born on ${birth.date} in ${birth.place}.`);
  }
}

/// And if it comes from an api we can do this : 
interface Name {
  name: string;
}
interface PersonWithBirth extends Name {
  placeOfBirth: string;
  dateOfBirth: Date;
}
type Person = Name | PersonWithBirth;

function eulogize(p: Person) {
  if ('placeOfBirth' in p) {
  p // Type is PersonWithBirth
  const {dateOfBirth} = p // OK, type is Date
  }
}



// <<<<<<<<<<<<<<<<<<<<<<<<Section 12>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/**
* Rule 12: Prefer More Precise Alternatives to String Types
*/
interface Album {
  artist: string;
  title: string;
  releaseDate: string; // YYYY-MM-DD
  recordingType: string; // E.g., "live" or "studio"
}

const kindOfBlue: Album = {
  artist: 'Miles Davis',
  title: 'Kind of Blue',
  releaseDate: 'August 17th, 1959',// Oops!
  recordingType: 'Studio', // Oops!
};
// here we don't get any error and also when we call function 
// we don't get error there 
function recordRelease(title: string, date: string) { /* ... */ }
recordRelease(kindOfBlue.releaseDate, kindOfBlue.title); // OK, should be error

/**
 * So for solving this problem we should do this : 
 */

type RecordingType = 'studio' | 'live';
interface Album {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType;
}

// Another sample in this section is in argument of strings

// In this example we get error becase of key:string
function pluck<T>(record: T[], key: string): any[] {
  return record.map(r => r[key]);
// ~~~~~~ Element implicitly has an 'any' type
//
//  because type '{}' has no index signature
}

/// Because TypeScript is now complaining that the string type for key is too broad. 
// So we have just four condition not string for key: “artist,” “title,” “releaseDate,” and “recordingType”
// we can change to this : 
// use keyof , keyof Album = "artist", "title", "releaseDate", "recordingType"
function pluck<T>(record: T[], key: keyof T) {
  return record.map(r => r[key]);
}

// And in the end we can do this :
/// Because we should be percise about the return type of function 
// without that , we get the return type union and it wasn't percise 
// so we can do it better  
function pluck<T, K extends keyof T>(record: T[], key: K): T[K][] {
return record.map(r => r[key]);
}
// The problem is here 
const releaseDates = pluck(albums, 'releaseDate'); // Type is (string | Date)[]