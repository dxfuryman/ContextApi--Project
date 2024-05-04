import React, { useContext } from 'react'
import { ThemeContext } from './context/theme.js'
import './App.css'

const Button = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className={`${isDarkTheme ? 'lightBtn' : 'darkBtn'}`}>
            change Theme
        </button>
    )
}
export default Button;