import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

const addClass = document.body.classList;
const removeClass = document.querySelector('body').classList;

export default useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode');
    
    useEffect(() => {
        {value ? addClass.add("dark-mode") : removeClass.remove('dark-mode') }    
    }, [darkMode]) 

    return [darkMode, setDarkMode];    
}
