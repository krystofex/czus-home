import React, { Fragment, useContext } from 'react';
import Head from 'next/head';
import {
    Widget,
    WidgetSettings,
} from '../src/components/widgets/WidgetController';
import { Responsive, WidthProvider } from 'react-grid-layout';
import {
    useWidgetQuery,
    useConfigurationQuery,
} from '../src/graphql/hello.graphql';
import ErrorPage from '../src/components/pages/ErrorPage';
import LoadingPage from '../src/components/pages/LoadingPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DraggableContext } from '../src/hooks/DraggableContext';
import { Menu, Transition } from '@headlessui/react';
import Navbar from '../src/components/widgets/controlPanel/Navbar';
import { useTranslation } from 'react-i18next';

// icons
import { RiCloseCircleFill } from 'react-icons/ri';
import { MdSettings } from 'react-icons/md';
import { BiPlusCircle } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';

const Home = () => {
    const { t } = useTranslation();
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const { data, loading, error } = useWidgetQuery();
    const configuration = useConfigurationQuery();
    const { draggable, setDraggable } = useContext(DraggableContext);

    if (error) return <ErrorPage />;
    if (loading || configuration.loading) return <LoadingPage />;

    let controlType = configuration.data.configuration[0].control;
    let margin;
    switch (controlType) {
        case 'sidebar':
            margin = 'ml-24';
            break;
        case 'controlPanel':
            margin = '';
            break;
        default:
            controlType = 'navbar';
            margin = 'mt-12';
            break;
    }

    let gridItems = data.widget.map(({ _id, widgetName, position, name }) => {
        return controlType !== 'controlPanel' &&
            widgetName === 'controlPanel' ? (
            <div key={_id}></div>
        ) : (
            <div
                className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                key={_id}
                data-grid={{
                    x: position[0],
                    y: position[1],
                    w: position[2],
                    h: position[3],
                    isResizable: true,
                    isDraggable: draggable,
                }}
            >
                <Menu
                    as="div"
                    className={`${
                        draggable && widgetName != 'controlPanel'
                            ? 'visible'
                            : 'invisible'
                    } absolute -top-1 -right-1 inline-block`}
                >
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <div>
                                <MdSettings
                                    size={24}
                                    className="text-light-text dark:text-dark-text mx-0.5"
                                />
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <WidgetSettings
                                widgetName={widgetName}
                                name={name}
                            />
                            <div className="px-1 py-1">
                                <Menu.Item>
                                    <button
                                        onClick={() => {
                                            console.log(
                                                'delete widget: ' + _id
                                            );
                                        }}
                                        className={` group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    >
                                        <RiCloseCircleFill
                                            size={24}
                                            className="text-dogeBlood mr-2"
                                        />
                                        {t('delete widget')}
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
                <Widget
                    widgetName={widgetName}
                    name={name}
                    size={[position[0], position[1], position[2], position[3]]}
                />
            </div>
        );
    });

    const navbar = controlType === 'navbar' ? <Navbar /> : <div></div>;

    return (
        <>
            <Head>
                <title>{'myRoom'}</title>
                <link rel="icon" href="icons/favicon.ico" />
            </Head>

            <ToastContainer />

            <ResponsiveGridLayout
                className={`${margin} layout`}
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

            {navbar}

            <div
                className={`${
                    draggable ? 'visible' : 'invisible'
                } absolute top-5 left-5`}
            >
                <button
                    onClick={() => setDraggable(false)}
                    className={`${
                        draggable ? 'visible' : 'invisible'
                    }  inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-white bg-green-500 rounded-md bg-opacity-90 hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <AiFillCheckCircle size={20} className="mr-2" />
                    {t('save')}
                </button>
                <br />
                <button
                    onClick={() => setDraggable(false)}
                    className={`${
                        draggable ? 'visible' : 'invisible'
                    }  inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-500 rounded-md bg-opacity-90 hover:bg-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                    <BiPlusCircle size={20} className="mr-2" />
                    {t('add widget')}
                </button>
            </div>
        </>
    );
};
export default Home;
