import useDarkMode from '../hooks/useDarkMode';

const ErrorPage = () => {
    useDarkMode();

    return (
        <div className="w-full mt-20 text-center">
            <h1 className="text-light-text dark:text-dark-text">
                Cannot connect to database
            </h1>
            <a href="/">
                <button className="bg-nextBlue text-dark-text text-2xl text-center py-1.5 px-4 mt-3 rounded-widget shadow-custom">
                    refresh
                </button>
            </a>
        </div>
    );
};

export default ErrorPage;
