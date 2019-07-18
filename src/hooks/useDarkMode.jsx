import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

const body = document.querySelector('body');

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode');

    useEffect(() => {
        darkMode ? body.classList.add("dark-mode") : body.classList.remove('dark-mode') 
    }, [darkMode])

    return [darkMode, setDarkMode];    
}