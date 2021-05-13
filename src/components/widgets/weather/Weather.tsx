import { Heading } from '../WidgetController';
import { useOpenWeatherSubSubscription } from '../../../graphql/openWeather.graphql';
import { toast } from 'react-toastify';
import { FC } from 'react';

type widgetProps = { name: string; size: [number, number, number, number] };
const Weather: FC<widgetProps> = ({ name, size }) => {
    if (name === 'OpenWeather') {
        const { data, loading, error } = useOpenWeatherSubSubscription();

        if (error) {
            toast.error("couldn't connect to open weather api");
            return <div>error</div>;
        }

        if (loading) return <div>loading</div>;

        if (data.openWeather.cod != 200) {
            toast.error(data.openWeather.message);
            return (
                <div>
                    <h4 className="text-dogeBlood text-2xl text-center pt-2 ">
                        {data.openWeather.message}
                    </h4>
                </div>
            );
        }

        return (
            <div className="w-weather content-end">
                <Heading>{data.openWeather.name}</Heading>
                <div className="grid grid-cols-3 p-1 text-light-text dark:text-dark-text">
                    <img src="" className="h-full" />
                    <div>
                        <span className="font-normal text-nextBlue text-3xl">
                            {data.openWeather.main.temp} °C
                        </span>
                        <br></br>
                        feels like: {data.openWeather.main.feels_like}°C
                        <br></br>
                    </div>
                    <div>
                        min: {data.openWeather.main.temp_min} °C<br></br> max:{' '}
                        {data.openWeather.main.temp_max} °C
                        <br></br> pressure: {data.openWeather.main.pressure} hPa
                    </div>
                </div>
            </div>
        );
    }
};

export default Weather;
