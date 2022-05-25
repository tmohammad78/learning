/// Wrapping function to reduce side effect area

//// Before

function sortStudentByName(students){
  students.sort(function byName(s1,s2){
    if(s1.name < s2.name) return -1;
    else if (s1.name > s2.name) return 1;
    else return 0;
  })
  return students;
}


/// After 

function getStudentsByName(students){
  students = students.slice()
  return sortStudentByName

  function sortStudentByName(){
    students.sort(function byName(s1,s2){
      if(s1.name < s2.name) return -1;
      else if (s1.name > s2.name) return 1;
      else return 0;
    })
    return students;
  }

}



/// Part 2

/// bianry shape
function addTwo(x,y){
  return x + y
}

/// Unary shape
function increment(x){
  return addTwo(x,1)
}

//// We can convert them and make same shap

function binary(fn){
  return function one(arg){
    return fn(arg)
  }
}

function unary(fn){
  return function tow(arg1,arg2){
    return fn(arg1,arg2)
  }
}

function f(...args){
  return args
}

let g = unary(f)
let f = binary(f)

g(1,2,3,4)
h(1,2,3,4)