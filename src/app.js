import React, { useState } from 'react'
//Theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/theme/theme';
import { GlobalStyles } from './assets/theme/global';
import Route from './route/Route';

function App() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />

                <button onClick={toggleTheme} className="btn">Toggle theme</button>
                <Route />
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App
