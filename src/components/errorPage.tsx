const ErrorPage = () => {
    return (
        <div>
            <h1 className="">Cannot connect to database</h1>
            <a href="/">
                <button className="bg-dogeBlood text-2xl text-center p-2 rounded-widget shadow-custom">
                    refresh
                </button>
            </a>
        </div>
    );
};

export default ErrorPage;
