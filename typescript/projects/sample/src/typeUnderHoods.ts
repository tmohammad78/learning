////// 
//// Pick
type MyPick<O,T extends keyof O> = {
  [P in T]: O[P]
}  

interface ITest00 {
  a: string;
  b:number;
  c: string;
}

type test17 = MyPick<ITest00,"a" | "b">
type test18 = Pick<ITest00,"c">
const test18Sample : test18 = {
  c: "test"
}

/////////// 
/// Readonly

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P] 
}

const test19Sample: MyReadOnly<Record<any,any>> = {
  a: "this is test"
}
test19Sample.a = "dsfsdf" //// There is error 

////////
//// Readonly by key

type ReadOnlyByKey<T, K extends keyof T> = MyReadOnly<MyPick<T, K>> & Omit<T, K>;

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

///////
