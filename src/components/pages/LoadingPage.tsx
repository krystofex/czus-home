import React from 'react';

const LoadingPage = (): JSX.Element => {
    return (
        <>
            <style jsx>{`
                .body {
                    margin: 0px;
                    background: radial-gradient(#cecece, #fff);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    overflow: hidden;
                }

                .container {
                    width: 200px;
                    height: 200px;
                    border-radius: 100%;
                    background: linear-gradient(
                        165deg,
                        rgba(255, 255, 255, 1) 0%,
                        rgb(220, 220, 220) 40%,
                        rgb(170, 170, 170) 98%,
                        rgb(10, 10, 10) 100%
                    );
                    position: relative;
                }
                .loader {
                }

                .loader:before {
                    position: absolute;
                    content: '';
                    width: 100%;
                    height: 100%;
                    border-radius: 100%;
                    border-bottom: 0 solid #ffffff05;

                    box-shadow: 0 -10px 20px 20px #ffffff40 inset,
                        0 -5px 15px 10px #ffffff50 inset,
                        0 -2px 5px #ffffff80 inset, 0 -3px 2px #ffffffbb inset,
                        0 2px 0px #ffffff, 0 2px 3px #ffffff,
                        0 5px 5px #ffffff90, 0 10px 15px #ffffff60,
                        0 10px 20px 20px #ffffff40;
                    filter: blur(3px);
                    animation: 2s rotate linear infinite;
                }

                @keyframes rotate {
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
            <div className="body">
                <div className="container">
                    <div className="loader"></div>
                </div>
            </div>
        </>
    );
};

export default LoadingPage;
