import Moment from 'react-moment';
import useDarkMode from '../../../hooks/useDarkMode';
import { MdSettings } from 'react-icons/md';
import { BiMoon, BiSun } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [theme, setTheme] = useDarkMode();
    return <div className="text-light-text dark:text-dark-text p-1"></div>;
};

export default Navbar;
