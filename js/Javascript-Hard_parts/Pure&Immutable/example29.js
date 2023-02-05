/**
 * This is immpure function because we are changing the main object , the better way is no copy the data and change that object 
 */
function changeObj(key,value,obj) {
    obj[key] = value
}

const data = { 
    user: 12
}

changeObj('salary',3000, data)


//// Pure one 
function changeObj(key,value,obj) {
    const newObj = {...obj}
    newObj[key] = value
    return newObj
}

const data = { 
    user: 12
}

changeObj('salary',3000, data)
