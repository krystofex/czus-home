import Moment from 'react-moment';
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const ControlPanel = () => {
    const [theme, setTheme] = useState('mode');

    useEffect(() => {
        setTheme(Cookie.get('theme') === 'dark' ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
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
