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
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import useDarkMode from '../../../hooks/useDarkMode';
import SettingsWindow from './SettingsWindow';

const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useDarkMode();
    const { draggable } = useContext(DraggableContext);

    return (
        <>
            <div className="absolute top-0 left-0 w-full bg-black text-dark-text px-10 py-2 flex justify-between">
                <div className="flex">
                    <button>
                        <BsArrowLeftShort size={20} />
                    </button>
                    <div className="mt-0.5">currentRoom</div>
                    <button>
                        <BsArrowRightShort size={20} />
                    </button>
                </div>

                <Popover as="div">
                    <Popover.Button className="focus:outline-none">
                        <Moment format="hh:mm:ss" interval={10} />
                    </Popover.Button>
                    <Popover.Panel className="absolute inset-x-1/2 transform -translate-x-1/2 w-56 mt-4 focus:outline-none ">
                        <DayPicker className="bg-dark-widget rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" />
                    </Popover.Panel>
                </Popover>

                <div>
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
            </div>
        </>
    );
};

export default Navbar;
