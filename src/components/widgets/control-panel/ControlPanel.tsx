import React, { useState } from 'react';
import Modal from 'react-modal';
import Moment from 'react-moment';
import useDarkMode from '../../../hooks/useDarkMode';
import { MdSettings } from 'react-icons/md';
import { BiMoon, BiSun } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { RiCloseCircleFill } from 'react-icons/ri';

import Navbar from './Navbar';
import Panel from './Panel';
import Settings from '../../settings';

const ControlPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useDarkMode();

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="text-light-text dark:text-dark-text p-1">
                <div className="float-left">
                    <Moment format="hh:mm:ss" interval={10} />
                </div>

                <button className="float-right px-1">
                    <FaUserCircle size={24} />
                </button>
                <button className="float-right px-1" onClick={toggleModal}>
                    <MdSettings size={24} />
                </button>

                <button
                    onClick={() => {
                        //@ts-ignore
                        setTheme(theme === 'dark' ? 'light' : 'dark');
                    }}
                    className="float-right px-1"
                >
                    {theme === 'dark' ? (
                        <BiSun size={24} />
                    ) : (
                        <BiMoon size={24} />
                    )}
                </button>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Settings"
            >
                <nav className="sticky pb-2 top-0">
                    <div>Settings</div>
                    <button
                        onClick={toggleModal}
                        className="text-dogeBlood absolute top-0 right-0"
                    >
                        <RiCloseCircleFill size={32} />
                    </button>
                </nav>
                <div></div>
                <div></div>
            </Modal>
        </>
    );
};

export default ControlPanel;
