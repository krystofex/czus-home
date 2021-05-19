import React, { Fragment, useContext, createContext } from 'react';
import Head from 'next/head';
import Widget from '../src/components/widgets/WidgetController';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useWidgetQuery } from '../src/graphql/hello.graphql';
import ErrorPage from '../src/components/errorPage';
import LoadingPage from '../src/components/loadingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DraggableContext } from '../src/hooks/DraggableContext';
import { Popover, Dialog, Menu, Transition } from '@headlessui/react';

import { RiCloseCircleFill } from 'react-icons/ri';
import { MdSettings, MdSave } from 'react-icons/md';

const Home = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const { data, loading, error } = useWidgetQuery();
    const { draggable, setDraggable } = useContext(DraggableContext);

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
                    isDraggable: draggable,
                }}
            >
                <div
                    className={`${
                        draggable && widget.widgetName != 'controlPanel'
                            ? 'visible'
                            : 'invisible'
                    } absolute -top-2 -right-2 flex`}
                >
                    <button>
                        <MdSettings
                            size={24}
                            className="text-light-text dark:text-dark-text mx-0.5"
                        />
                    </button>
                    <button>
                        <RiCloseCircleFill
                            size={24}
                            className="text-dogeBlood"
                        />
                    </button>
                </div>
                <Widget
                    widgetName={widget.widgetName}
                    name={widget.name}
                    size={[
                        widget.position[0],
                        widget.position[1],
                        widget.position[2],
                        widget.position[3],
                    ]}
                />
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

            <div
                className={`${
                    draggable ? 'visible' : 'invisible'
                } absolute top-5 left-5`}
            >
                <button
                    onClick={() => setDraggable(false)}
                    className={`${
                        draggable ? 'visible' : 'invisible'
                    } inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-dogeBlood rounded-md bg-opacity-40 hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    exit edit mode
                    <RiCloseCircleFill size={20} className="ml-2" />
                </button>
                <br />
                <button
                    onClick={() => setDraggable(false)}
                    className={`${
                        draggable ? 'visible' : 'invisible'
                    }  inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-white bg-green-500 rounded-md bg-opacity-40 hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    save
                    <MdSave size={20} className="ml-2" />
                </button>
            </div>
        </>
    );
};
export default Home;
