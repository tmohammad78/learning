const fn00 = (name:string,age:number,sex:boolean) => true
/** 
 *### Parameters
 *We can extract type of arguments. 
*/
type test00 = Parameters<typeof fn00> /// [string,number,boolean]

////////////////////

type Params<F extends (...args: any[]) => any> = 
  F extends ((...args:infer A) => any) ? A : never

type test01 = Params<typeof fn00> /// [string,number,boolean]

///////////////////

/**
 * ### Head
 * Extract first type of the array like
 * ```
 * type test03 = Head<Params<typeof fn00>> /// string
 * ```
 */

///////////////////

type Head <T extends any[]> = T extends [any,...any[]] ? T[0] : never

type test02 = Head<[1,2,"ss",{}]> /// 1
type test03 = Head<Params<typeof fn00>> /// string

///////////////////

type Tail<T extends any[]> = 
((...t:T) => any) extends ((_:any,...tail:infer TT) => any) ? TT : never

type test04 = Tail<[string,number ,number]> /// [number,number]
type test05 = Tail<Params<typeof fn00>> /// [number,boolean]

///////////////////

type HasTail<T extends any[]> = T extends ([] | [any]) ? false : true
type params = [1,2,string]
type test10 = HasTail<params> /// True
type test11 = HasTail<Tail<params>> /// True
type test12 = HasTail<Tail<Tail<params>>> /// false

///////////////////

/**
 * ### Infer
 * A Beautiful inspecting tool that extract types 
 */

///////////////////

type ObjectInfer<O> = O extends { a:infer A } ? A : never

const defaultObj = { a: "hello"}
type test06 = ObjectInfer<typeof defaultObj> // string
type test07 = ObjectInfer<{b:4}>   // never

///////////////////

type FunctionInfer<F> = F extends (...args: infer A) => infer R ? 
[A,R] : never

const fn01  = (name:string,age:number) => true
type test08 = FunctionInfer<typeof fn01> /// [[string,number],boolean]

///////////////////

type ArrayInfer<T> = T extends (infer U)[] ? U : never
const arr = [0,"data",1]
type test09 = ArrayInfer<typeof arr> //// string | number

///////////////////

type Length<T extends any[]> = T['length']

type test13 = Length<[]> /// 0
type test14 = Length<["a",1,2,3,{a:"dc"}]> /// 5

///////////////////

type Prepend<E,T extends any[]> = 
((head:E,...args: T )=> any) extends ((...args: infer U) => any) ? U : T

type test15 = Prepend<string,[]> /// [string]
type test16  = Prepend<number,[1,2]> /// [number,1,2]

///////////////////