import { FC, useState } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

type widgetProps = { name: string };
const SensorSettigs: FC<widgetProps> = ({ name }) => {
    const names = ['temperature', 'pressure', 'humidity'];
    const [currentName, setName] = useState(names.indexOf(name));

    return (
        <>
            <div className="px-2 py-1 ">
                <strong className=" text-sm"> Sensor:</strong>
                <div className="flex">
                    <button
                        onClick={() =>
                            setName(
                                currentName == 0
                                    ? names.length - 1
                                    : currentName - 1
                            )
                        }
                    >
                        <BsArrowLeftShort size={20} />
                    </button>
                    <button className={`group text-center rounded-md w-full`}>
                        {names[currentName]}
                    </button>
                    <button
                        onClick={() =>
                            setName(
                                currentName == names.length - 1
                                    ? 0
                                    : currentName + 1
                            )
                        }
                    >
                        <BsArrowRightShort size={20} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SensorSettigs;
