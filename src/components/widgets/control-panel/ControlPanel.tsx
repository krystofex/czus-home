import Moment from 'react-moment';
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const ControlPanel = () => {
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

    return (
        <div className="text-light-text dark:text-dark-text">
            <Moment format="hh:mm:ss" interval={10} className="floatLeft" />
            <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? 'light' : 'dark'}
            </button>
        </div>
    );
};

export default ControlPanel;
