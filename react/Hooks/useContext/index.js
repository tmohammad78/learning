import { createContext, useContext } from 'react';

const ThemeContext = createContext('light')

export default function Myapp() {
    const [theme,setTheme] = useState('light')
    return (
        <>
            <ThemeContext.Provider value={theme} >
                <Panel title="title">
                    This is test
                </Panel>
            </ThemeContext.Provider>
            <Button onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
            }}>
                Toggle theme
            </Button>
        </>
    )
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    )
  }



/**
 * Also you can pass an object to the value of provider in the context
 * and also a function to update the state
 */
function MyApp() {
    const [currentUser, setCurrentUser] = useState(null);
  
    function login(response) {
      storeCredentials(response.credentials);
      setCurrentUser(response.user);
    }
  
    return (
      <AuthContext.Provider value={{ currentUser, login }}>
        <Page />
      </AuthContext.Provider>
    );
  }
//// But it has a performance issue so you can use useMemo and other performance tips 
import { useCallback, useMemo } from 'react';

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  );
}

/**
 * As a result of this change, even if MyApp needs to re-render, 
 * the components calling useContext(AuthContext) won’t need to re-render unless currentUser has changed.
 */