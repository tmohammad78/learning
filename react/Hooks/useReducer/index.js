function reducer(state,action) { 

} 
const [state,dispatch] = useDispatch(reducer, { age: 24 })


const sampleComponent = () => {
    function reducer(state,action) {
        switch(action.type) {
            case 'update_name':
                return {
                    age: state.age,
                    name: action.value
                }
            case 'increment_age':
                return {
                    age: state.age + 1,
                    name: state.name
                }
            
        }
        throw Error('Unknown action: ' + action.type);
    }
    const initialValue = { name: 'Mohammad' , age: 24 }
    const [state , dispatch] = useDispatch(reducer, initialValue)


    const handleChange = (event) => {
        dispatch({
            type: "update_name",
            value: event.target.value
        })
    }
    const handleButtonClick = () => {
        dispatch({
            type: "increment_age",
        })
    }
    return (
        <div>
            <input value={state.name} onChange="handleChange" />
            <button onClick={handleButtonClick}>
                Increment age
            </button>
        </div>
    )
}

/**
 * This is sample component that init value is depent on username input
 * so here we use third argument for useDispatch
 */
const anotherComponent = ({username}) => {
    function createInitialState(username) {
        const initialTodos = [];
        for (let i = 0; i < 50; i++) {
          initialTodos.push({
            id: i,
            text: username + "'s task #" + (i + 1)
          });
        }
        return {
          draft: '',
          todos: initialTodos,
        };
      }
    const [state , dispatch] = useDispatch(reducer, username , createInitialState)
    return (
        <div>
            This is another component
        </div>
    )
}


