import "tailwindcss/tailwind.css";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Widget from "../components/widgets/WidgetController";

import settings from "../components/settings/czusHomeConfig.json";
import { useKrystofQuery, useSensorDataQuery } from "../graphql/hello.graphql";

const MainGrid = (props) => {
  return (
    <div
      className="h-screen grid grid-cols-6 grid-rows-6 gap-4 p-4 font-sans bg-light-background dark:bg-dark-background"
      style={
        {
          //https://source.unsplash.com/collection/1091/1280x1024
          //backgroundImage: `url("https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1024&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280")`,
        }
      }
    >
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
    <>
      <Head>
        <title>{settings.rooms[0].name}</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>

      <MainGrid>{widgetArray}</MainGrid>
    </>
  );
};
export default Home;
