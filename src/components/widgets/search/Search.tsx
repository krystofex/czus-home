import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const Search = ({ name }: { name: string }): JSX.Element => {
    let url;
    switch (name) {
        case 'google':
            url = 'https://google.com/search?';
            break;
        case 'duckDuckGo':
            url = 'https://duckduckgo.com/';
            break;
        case 'seznam':
            url = 'https://search.seznam.cz/';
            break;
    }

    return (
        <div>
            <form action={url} className="w-full">
                <input
                    name="q"
                    className="w-11/12 outline-none border-none inline-block text-normal text-light-text dark:text-dark-text bg-light-widget dark:bg-dark-widget"
                />
                <button
                    type="submit"
                    className="focus:outline-none inline-block text-light-text dark:text-dark-text"
                >
                    <BiSearchAlt2 size={24} />
                </button>
            </form>
        </div>
    );
};

export default Search;
