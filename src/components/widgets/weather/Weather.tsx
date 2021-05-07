import { Heading } from '../WidgetController';
import { useOpenWeatherQuery } from '../../../graphql/openWeather.graphql';

const Weather = () => {
    const { data, loading, error } = useOpenWeatherQuery();

    if (error) return 'error';

    if (loading) return 'loading';
    console.log(data.openWeather.main.temp);
    return (
        <div className="w-weather content-end">
            <Heading>weather</Heading>
            <div className="grid grid-cols-3 p-1 text-light-text dark:text-dark-text">
                <img src="" className="h-full" />
                <div>
                    <span className="font-normal text-nextBlue text-3xl">
                        {data.openWeather.main.temp} °C
                    </span>
                    <br></br>
                    feels like: {data.openWeather.main.feels_like}°C<br></br>
                </div>
                <div>
                    min: {data.openWeather.main.temp_min} °C<br></br> max:{' '}
                    {data.openWeather.main.temp_max} °C
                    <br></br> pressure: {data.openWeather.main.pressure} hPa
                </div>
            </div>
        </div>
    );
};

export default Weather;
