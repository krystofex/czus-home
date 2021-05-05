import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

export default function useDarkMode(){
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        setTheme(Cookie.get('theme') === 'dark' ? 'dark' : 'light');
        return;
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        const previousTheme = theme === 'dark' ? 'light' : 'dark';

        root.classList.remove(previousTheme);
        root.classList.add(theme);
        Cookie.set('theme', theme);
        return;
    }, [theme]);

    return [theme, setTheme];
}