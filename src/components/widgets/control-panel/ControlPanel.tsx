import Moment from 'react-moment';
import useDarkMode from '../../../hooks/useDarkMode';

const ControlPanel = () => {
    const [theme, setTheme] = useDarkMode();

    return (
        <div className="text-light-text dark:text-dark-text">
            <Moment format="hh:mm:ss" interval={10} className="floatLeft" />
            <button
                //@ts-ignore

                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? 'light' : 'dark'}
            </button>
        </div>
    );
};

export default ControlPanel;
