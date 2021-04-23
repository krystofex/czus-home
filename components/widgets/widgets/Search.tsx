import { TailwindPosition } from "./TailwindPosition";
import Image from "next/image";

const Main = (props) => {
  return (
    <div className={`${TailwindPosition(props.position)} max-h-12 p-2`}>
      {props.children}
    </div>
  );
};

const Search = ({ name, position }) => {
  var url;
  switch (name) {
    case "google":
      url = "https://google.com/search?";
      break;
    case "duckDuckGo":
      url = "https://duckduckgo.com/";
      break;
    case "seznam":
      url = "https://search.seznam.cz/";
      break;
  }
  //outline-none border-none
  return (
    <Main position={position}>
      <form action={url} className="w-full">
        <input
          name="q"
          className="w-11/12 outline-none border-none inline-block text-normal"
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
    </Main>
  );
};

export default Search;
