///// Initial state 

const generateInit = () => ({a:'sd'})
const [state,setState] = useState("init state") /// one way
const [state,setState] = useState(() => generateInit()) // second way

const [state,setState] = useState(generateInit()) // Wrong way . generateInit call in every re rendering.

const test = () => {}
const [state,setState] = useState(test) // Okay



////// 

const clickHandler = () => {
    // prev count is 0 
    setCount(prev => prev + 1 ) /// or setCount(count  + 1 )
    console.log(count) ///// 0 
    setTimeout(() => {
        console.log(count); // Also 0!
      }, 5000);

      /// Because it will update for next render not in the runnig code
      // so if we log the state we see zero
}


//// Batches
/**
 * All set function and all changes will change in one time rendering not separate rendering
 */
const clickHandler = () => {
   setName("Mohammad")
   setPhoneNumber("0912121212")
   setGender("Male")
}

///// Store a function 
const [fn , setFn ] = useState(() => myFn)
const handler = () => {
    setFn(() => newFn)
}

/////

