///// example 1 generic Constraints

interface Test { 
  length: number;
}

const generateObj  = <Type extends Test>(data: Type) => {
  console.log(data.length)
  return data
}

// generateObj(2)
generateObj({ a: "d",length: 2  })



////////// example 2
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");
Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.