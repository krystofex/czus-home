import React from 'react';
import Head from 'next/head';
import Widget from '../src/components/widgets/WidgetController';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useWidgetQuery } from '../src/graphql/hello.graphql';
import ErrorPage from '../src/components/errorPage';
import LoadingPage from '../src/components/loadingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const { data, loading, error } = useWidgetQuery();

    if (error) return <ErrorPage />;
    if (loading) return <LoadingPage />;

    return (
        <>
            <Head>
                <title>{'myRoom'}</title>
                <link rel="icon" href="icons/favicon.ico" />
            </Head>

            <ToastContainer />

            <div>
                <ResponsiveGridLayout
                    className="layout"
                    breakpoints={{
                        lg: 1200,
                        md: 996,
                        sm: 768,
                        xs: 480,
                        xxs: 0,
                    }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={20}
                >
                    <div
                        className="animate-pulseOnce rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                        key="b"
                        data-grid={{
                            x: 3,
                            y: 3,
                            w: 4,
                            h: 5,
                            isResizable: true,
                            isDraggable: true,
                        }}
                    >
                        <Widget widgetName="weather" name="OpenWeather" />
                    </div>
                    <div
                        className="animate-pulseOnce rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                        key="c"
                        data-grid={{
                            x: 1,
                            y: 3,
                            w: 2,
                            h: 5,
                            minW: 2,
                            maxW: 2,
                            isResizable: true,
                            isDraggable: true,
                        }}
                    >
                        <Widget widgetName="sensor" name="temperature" />
                    </div>
                    <div
                        className="animate-pulseOnce rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                        key="d"
                        data-grid={{
                            x: 10,
                            y: 0,
                            w: 2,
                            h: 2,
                            isResizable: true,
                            isDraggable: true,
                        }}
                    >
                        <Widget widgetName="controlPanel" name="" />
                    </div>

                    <div
                        className="animate-pulseOnce rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                        key="e"
                        data-grid={{
                            x: 1,
                            y: 0,
                            w: 8,
                            h: 2,
                            isResizable: true,
                            isDraggable: true,
                        }}
                    >
                        <Widget widgetName="search" name="google" />
                    </div>
                </ResponsiveGridLayout>
            </div>
        </>
    );
};
export default Home;
