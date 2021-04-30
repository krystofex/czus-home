import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Widget from '../src/components/widgets/WidgetController';
import GridLayout from 'react-grid-layout';
import settings from '../src/components/settings/czusHomeConfig.json';

const Home = () => {
    return (
        <>
            <Head>
                <title>{settings.rooms[0].name}</title>
                <link rel="icon" href="icons/favicon.ico" />
            </Head>
            <GridLayout
                className="h-screen w-screen font-sans bg-light-background dark:bg-dark-background"
                cols={12}
                rowHeight={30}
                width={1200}
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
                    <Widget widgetName="weather" />
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
                    <Widget widgetName="controlPanel" />
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
            </GridLayout>
        </>
    );
};
export default Home;
