import React, { useState, useContext } from 'react'

//Theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/theme/theme';
import { GlobalStyles } from './assets/theme/global';
import Login from './pages/Login/Login';

function App({children}) {
    const [theme, setTheme] = useState('light');

    // The function that toggles between themes
    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

    return (
        <React.Fragment>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />

                <button onClick={toggleTheme} className="btn">Toggle theme</button>
                <Login/>

            </ThemeProvider>
        </React.Fragment>
    )
}

export default App
