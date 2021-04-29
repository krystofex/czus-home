import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Widget from '../src/components/widgets/WidgetController';
import GridLayout from 'react-grid-layout';
import settings from '../src/components/settings/czusHomeConfig.json';

const MainGrid = (props) => {
    return (
        <div className="h-screen grid grid-cols-6 grid-rows-6 gap-3 p-3 font-sans bg-light-background dark:bg-dark-background">
            {props.children}
        </div>
    );
};

const toWidget = (element) => {
    const { widgetName, name, position } = element;
    return (
        <Widget
            key={position}
            widgetName={widgetName}
            name={name}
            position={position}
        />
    );
};

const Home = () => {
    const widgetArray = settings.rooms[0].widgets.map(toWidget);

    return (
        <>
            <GridLayout
                className="layout"
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
                        w: 3,
                        h: 2,
                        minW: 2,
                        maxW: 4,
                        isResizable: true,
                        isDraggable: true,
                        esizeHandles: true,
                    }}
                >
                    b
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
                        esizeHandles: true,
                    }}
                >
                    b
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
                        esizeHandles: true,
                    }}
                >
                    b
                </div>
            </GridLayout>
        </>
    );
};
export default Home;
