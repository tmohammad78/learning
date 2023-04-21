
//// This is sample usage of useCallback
const MyApp = () => {

    const handleClick = useCallback(() => {
        /// do API call with an specific id.
    },[id])

    return (
        <div>
            <MyChild click="handleClick" />
        </div>
    )
}

const MyChild = useMemo(({handleClick}) => {
    return (
        <div>
            This is child component
        </div>
    )
})


///// Custom hooks 
function useRouter() {
    const { dispatch } = useContext(RouterStateContext);
  
    const navigate = useCallback((url) => {
      dispatch({ type: 'navigate', url });
    }, [dispatch]);
  
    const goBack = useCallback(() => {
      dispatch({ type: 'back' });
    }, [dispatch]);
  
    return {
      navigate,
      goBack,
    };
  }

////
// Simplified implementation (inside React)
function useCallback(fn, dependencies) {
    return useMemo(() => fn, dependencies);
}