import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Widget from '../src/components/widgets/WidgetController';
import Cookie from 'js-cookie';

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
            <Head>
                <title>{settings.rooms[0].name}</title>
                <link rel="icon" href="icons/favicon.ico" />
            </Head>
            <MainGrid>
                {widgetArray}{' '}
                <Widget
                    widgetName={'controlPanel'}
                    name={''}
                    position={[6, 0, 2, 1]}
                />
            </MainGrid>
        </>
    );
};
export default Home;
