import { WeatherBody } from '../components/weather/WeatherBody';
import { Layout } from '../layouts/Layout';

export const Weather = () => {
    return(
        <div className="Weather">
        <Layout>
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          La météo de la semaine
        </h1>
          <div>
            <WeatherBody />
          </div>
        </Layout>
      </div>
      );
}