import Moment from 'react-moment';
import useDarkMode from '../../../hooks/useDarkMode';
import { MdSettings } from 'react-icons/md';
import { BiMoon, BiSun } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { Disclosure, Menu, Transition } from '@headlessui/react';

const Panel = () => {
    const [theme, setTheme] = useDarkMode();

    return (
        <div className="text-light-text dark:text-dark-text p-1">
            <div className="float-left">
                <Moment format="hh:mm:ss" interval={10} />
            </div>
            <button className="float-right px-1">
                <MdSettings size={24} />
            </button>
            <button className="float-right px-1">
                <MdSettings size={24} />
            </button>

            <button
                onClick={() => {
                    //@ts-ignore
                    setTheme(theme === 'dark' ? 'light' : 'dark');
                }}
                className="float-right px-1"
            >
                {theme === 'dark' ? <BiSun size={24} /> : <BiMoon size={24} />}
            </button>
        </div>
    );
};

export default Panel;
