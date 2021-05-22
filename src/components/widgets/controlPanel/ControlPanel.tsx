import Moment from 'react-moment';
import { Popover, Menu, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { DraggableContext } from '../../../hooks/DraggableContext';
import { useContext } from 'react';

// icons
import { MdSettings } from 'react-icons/md';
import { HiSun } from 'react-icons/hi';
import { IoMdMoon } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

import useDarkMode from '../../../hooks/useDarkMode';
import SettingsWindow from './SettingsWindow';

const ControlPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useDarkMode();
    // @ts-ignore
    const { draggable, setDraggable } = useContext(DraggableContext);

    return (
        <>
            <div className="text-gray-900 dark:text-dark-text p-1">
                <Popover as="div" className="float-left px-1">
                    <Popover.Button className="focus:outline-none">
                        <Moment format="hh:mm:ss" interval={10} />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Popover.Panel className="absolute right-32 w-56 mt-6 focus:outline-none ">
                            <DayPicker className="bg-light-widget dark:bg-dark-widget rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" />
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <Menu as="div" className="float-right px-1">
                    <Menu.Button className="focus:outline-none">
                        <FaUserCircle size={24} />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    <button className="text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm">
                                        Log out
                                    </button>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                <button
                    type="button"
                    onClick={() => {
                        if (!draggable) setIsOpen(true);
                    }}
                    className="float-right px-1 focus:outline-none"
                >
                    <MdSettings size={24} />
                </button>

                <SettingsWindow state={{ isOpen, setIsOpen }} />

                <button
                    onClick={() => {
                        //@ts-ignore
                        setTheme(theme === 'dark' ? 'light' : 'dark');
                    }}
                    className="float-right px-1 focus:outline-none"
                >
                    {theme === 'dark' ? (
                        <HiSun size={24} />
                    ) : (
                        <IoMdMoon size={24} />
                    )}
                </button>
            </div>
        </>
    );
};

export default ControlPanel;
