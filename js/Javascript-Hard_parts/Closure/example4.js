function outer(){
    let counter = 0
    function incrementCounter(){
        counter++;
    }
    incrementCounter()
}

outer()