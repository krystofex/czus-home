import React, { Fragment, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { DraggableContext } from '../../../hooks/DraggableContext';
import { useTranslation } from 'react-i18next';

// icons
import { RiCloseCircleFill } from 'react-icons/ri';

const SettingsWindow = ({ state }: { state: any }): JSX.Element => {
    const { t } = useTranslation();

    const { setDraggable } = useContext(DraggableContext);

    return (
        <Transition appear show={state.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 overflow-y-auto"
                onClose={() => state.setIsOpen(false)}
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
                                {t('Settings')}
                            </Dialog.Title>
                            <div className="mt-2">
                                <div className="mt-5 text-md font-medium leading-6 text-gray-900">
                                    {t('widgets')}:
                                </div>
                                <div className="text-sm text-gray-700 flex">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            state.setIsOpen(false);
                                            setDraggable(true);
                                        }}
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    >
                                        {t('edit mode')}
                                    </button>
                                </div>
                                <div className="mt-5 text-md font-medium leading-6 text-gray-900">
                                    {t('control panel style')}:
                                </div>
                                <div className="flex justify-between">
                                    <div className="w-1/3">
                                        {t('navbar')}
                                        <div className="p-2 rounded-md hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            <img src="controlPanelStyles/navbar.svg" />
                                        </div>
                                    </div>
                                    <div className="w-1/3 mx-2">
                                        {t('widget')}
                                        <div className="p-2 rounded-md hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            <img src="controlPanelStyles/controlPanel.svg" />
                                        </div>
                                    </div>
                                    <div className="w-1/3">
                                        {t('sidebar')}
                                        <div className="p-2 rounded-md hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                                            <img src="controlPanelStyles/sidebar.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="absolute top-0 right-0 text-dogeBlood focus:outline-none"
                                    onClick={() => state.setIsOpen(false)}
                                >
                                    <RiCloseCircleFill size={32} />
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};

export default SettingsWindow;
