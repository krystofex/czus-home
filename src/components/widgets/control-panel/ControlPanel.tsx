import { GridPosition } from '../WidgetController';
import Moment from 'react-moment';
import Draggable from 'react-draggable';
import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const ControlPanel = ({ position }) => {
    const [theme, setTheme] = useState(
        Cookie.get('theme') === 'light' ? 'light' : 'dark'
    );

    useEffect(() => {
        return () => {
            const root = window.document.documentElement;

            root.classList.remove(theme === 'dark' ? 'light' : 'dark');
            root.classList.add(theme);
            Cookie.set('theme', theme);
        };
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
                    {theme}
                </button>
            </div>
        </Draggable>
    );
};

export default ControlPanel;
