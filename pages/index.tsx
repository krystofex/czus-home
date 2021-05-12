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

    let gridItems = data.widget.map((widget) => {
        return (
            <div
                className="animate-pulseOnce rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                key={widget._id}
                data-grid={{
                    x: widget.position[0],
                    y: widget.position[1],
                    w: widget.position[2],
                    h: widget.position[3],
                    isResizable: true,
                    isDraggable: true,
                }}
            >
                <Widget widgetName={widget.widgetName} name={widget.name} />
            </div>
        );
    });

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
                    {gridItems}
                </ResponsiveGridLayout>
            </div>
        </>
    );
};
export default Home;
