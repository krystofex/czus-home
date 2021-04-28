import { GridPosition } from '../WidgetController';
import Moment from 'react-moment';
import Draggable from 'react-draggable';
import React, { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const ControlPanel = ({ position }) => {
    const [theme, setTheme] = useState('mode');

    useEffect(() => {
        console.log('useEffect');
        setTheme(Cookie.get('theme') === 'dark' ? 'dark' : 'light');
    }, []);

    useEffect(() => {
        console.log('useEffect2');

        const root = window.document.documentElement;

        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        Cookie.set('theme', theme);
        return;
    }, [theme]);

    return (
        <Draggable grid={[25, 25]}>
            <div
                className={`${GridPosition(
                    position
                )} w-full max-h-12 p-2 text-light-text dark:text-dark-text inline`}
            >
                <Moment format="hh:mm:ss" interval={10} className="floatLeft" />
                <button
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {theme === 'dark' ? 'light' : 'dark'}
                </button>
            </div>
        </Draggable>
    );
};

export default ControlPanel;
