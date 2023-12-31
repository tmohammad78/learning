// <<<<<<<<<<<<<<<< ReadOnly >>>>>>>>>>>>>>>>

//// 3. Readonly by key

type ReadOnlyByKey<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key]
  } & {[P in keyof T as P extends K ? never : P]: T[P]}

type IsReadOnly = ReadOnlyByKey<typeof user,"phone">
interface IUser {
  name: string;
  phone: string;
}
const user:ReadOnlyByKey<IUser,"phone"> = {
  name: "Alex",
  phone: "9999"
}
user.name = "Mohammad"
user.phone = "32434" /// An error 

//// 4. Deep readonly

type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}

type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type Todo = DeepReadonly<X>



// <<<<<<<<<<<<< Tuple >>>>>>>>>>>>>>>>


//////// 5. Tuple to Union
type TupleToUnion = T extends Array<infer X> ? X : never

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

//////// 6. Tuple to Object
type TupleToObject<T extends readonly string[]> = {
  [x in T[number]]: x
}
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }>>,

///// 7.  First Item in Array 

type First<T extends any[]> = T extends [infer first,...infer rest] ? first : never
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]
type First3<T extends any[]> = T extends [] ? never : T[0]

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]


//////// 8. Get last Item from array 
type Last<T extends any[]> = T extends [...infer _, infer last] ? last :  never
Expect<Equal<Last<[3, 2, 1]>, 1>>,


/////// 9. Pop 
type Pop<T extends any[]> = T extends [...infer Remain , infer _] ? Remain : never
Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,

///// 10. length 

type Length<T> = T extends { length: infer R} ? R : never

Expect<Length<[1,2,3]>,3>


// <<<<<<<<<< Utility >>>>>>>>>>>>>

///////  Exclude 
type MyExclude<T, U> = T extends U ? never : T

Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,

////////  Pick 
type MyPick<P,T extends keyof P> = {
  [key in T]: P[key]
}  

interface ITest00 {
  a: string;
  b:number;
  c: string;
}

type test17 = MyPick<ITest00 , "a" | "b">
type test18 = Pick<ITest00 , "c">
const test18Sample : test18 = {
  c: "test"
}

 ///////  Awaited
 type MyAwaited<T> =  T extends PromiseLike<infer U> ? MyAwaited<U> : T;

 type X = Promise<string>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

//////// ReadOnly

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P] 
}

const test19Sample: MyReadOnly<Record<any,any>> = {
  a: "this is test"
}
test19Sample.a = "dsfsdf" //// There is error 


/////////// Omit

type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

////////// 