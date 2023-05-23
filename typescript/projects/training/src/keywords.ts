///////// Union

type Cat = { name: string, purss: boolean }
type Dog = { name: string, barks: boolean } 
type CatOrDog = Cat | Dog

type Return = string | number;  /// union

function test(a: string, b: number): Return {
    return a || b
}

/////////// inersection 

type CatAndDog = Cat & Dog 

///////////