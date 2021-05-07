import 'tailwindcss/tailwind.css';
import React from 'react';
import Head from 'next/head';
import Widget from '../src/components/widgets/WidgetController';
// import SettingsWindow from '../src/components/settings/SettingsWindow';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useWidgetQuery } from '../src/graphql/hello.graphql';
import useDarkMode from '../src/hooks/useDarkMode';
// import ContentLoader from 'react-content-loader';

const Home = () => {
    const ResponsiveGridLayout = WidthProvider(Responsive);
    const [theme, setTheme] = useDarkMode();
    const { data, loading, error } = useWidgetQuery();

    if (error) return 'error';

    if (loading) return 'loading';

    return (
        <>
            <Head>
                <title>{'myRoom'}</title>
                <link rel="icon" href="icons/favicon.ico" />
            </Head>
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
                    rowHeight={30}
                >
                    <div
                        className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                        key="b"
                        data-grid={{
                            x: 1,
                            y: 3,
                            w: 4,
                            h: 3,
                            isResizable: true,
                            isDraggable: true,
                        }}
                    >
                        <Widget widgetName="weather" name="" />
                    </div>
                    <div
                        className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                        key="c"
                        data-grid={{
                            x: 1,
                            y: 1,
                            w: 3,
                            h: 2,
                            minW: 2,
                            maxW: 4,
                            isResizable: true,
                            isDraggable: true,
                        }}
                    >
                        <Widget widgetName="sensor" name="temperature" />
                    </div>
                    <div
                        className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                        key="d"
                        data-grid={{
                            x: 1,
                            y: 2,
                            w: 3,
                            h: 2,
                            minW: 2,
                            maxW: 4,
                            isResizable: true,
                            isDraggable: true,
                        }}
                    >
                        <Widget widgetName="controlPanel" name="" />
                    </div>

                    <div
                        className="rounded-widget shadow-custom p-2 bg-light-widget dark:bg-dark-widget"
                        key="e"
                        data-grid={{
                            x: 8,
                            y: 2,
                            w: 9,
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
