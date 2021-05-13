import Moment from 'react-moment';
import useDarkMode from '../../../hooks/useDarkMode';
import { Popover, Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Draggable from 'react-draggable';

// icons
import { MdSettings } from 'react-icons/md';
import { HiSun } from 'react-icons/hi';
import { IoMdMoon } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';

// import Navbar from './Navbar';
// import Panel from './Panel';
// import Settings from '../../settings';

const ControlPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useDarkMode();
    const [value, onChange] = useState(new Date());

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

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
                                    {({ active }) => (
                                        <button
                                            className={`${
                                                active
                                                    ? 'bg-violet-500 text-white'
                                                    : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                        >
                                            Log out
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>

                <button
                    type="button"
                    onClick={openModal}
                    className="float-right px-1 focus:outline-none"
                >
                    <MdSettings size={24} />
                </button>

                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                                &#8203;
                            </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Settings
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="text-sm text-gray-500 flex">
                                            <div className="border-r-2 pr-4">
                                                <ul>
                                                    <li>Grid</li>
                                                    <li>User</li>
                                                    <li>Weather</li>
                                                </ul>
                                            </div>
                                            <div className="pl-4">
                                                <ul>
                                                    <li></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="absolute top-0 right-0 text-dogeBlood focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            <RiCloseCircleFill size={32} />
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>

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
