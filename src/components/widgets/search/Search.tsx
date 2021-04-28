import { GridPosition } from '../WidgetController';
import Image from 'next/image';

const Search = ({ name, position }) => {
    var url;
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
        <div className={`${GridPosition(position)} max-h-12 p-2 `}>
            <form action={url} className="w-full">
                <input
                    name="q"
                    className="w-11/12 outline-none border-none inline-block text-normal text-light-text dark:text-dark-text bg-light-widget dark:bg-dark-widget"
                />
                <button
                    type="submit"
                    className="outline-none border-none inline-block text-normal"
                >
                    <Image
                        src="/icons/search.svg"
                        alt="delete widget"
                        width={25}
                        height={25}
                        className="p-2 sticky "
                    />
                </button>
            </form>
        </div>
    );
};

export default Search;
