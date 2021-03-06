import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const useDarkMode = (): { theme: string; setTheme: () => void } => {
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
        root.classList.remove(`bg-${previousTheme}-background`);
        root.classList.add(`bg-${theme}-background`);

        Cookie.set('theme', theme);
        return;
    }, [theme]);

    return [theme, setTheme];
};

export default useDarkMode;
