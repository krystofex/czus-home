import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Widget from "../components/widgets/WidgetController";

import settings from "../components/settings/czusHomeConfig.json";
import { useKrystofQuery, useSensorDataQuery } from "../graphql/hello.graphql";

const MainGrid = (props) => {
  return (
    <div className="h-screen grid grid-cols-6 grid-rows-6 gap-4 p-4 font-sans bg-light-background dark:bg-dark-background">
      {props.children}
    </div>
  );
};

const toWidget = (element) => {
  const { widgetName, name, position } = element;
  return <Widget widgetName={widgetName} name={name} position={position} />;
};

const Home = () => {
  const widgetArray = settings.rooms[0].widgets.map(toWidget);

  return (
    <div className="dark">
      <Head>
        <title>{settings.rooms[0].name}</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>
      <MainGrid>
        {widgetArray}
        <Widget widgetName={"controlPanel"} position={[7, 0, 1, 1]} />
      </MainGrid>
    </div>
  );
};
export default Home;
