import {action, makeObservable, observable} from 'mobx';
import {act} from 'react-test-renderer';
import {cityName, FORECAST_KEY} from '../../utils/Constants';
import WeatherForecastDao from '../Dao/WeatherForecastDao';

class WeatherForecastRepository {
  weatherForecastList: WeatherForecastDao;
  constructor() {
    makeObservable(this, {
      weatherForecastList: observable,
      setForecastList: action,
    });

    this.callWeatherForecastApi();
  }

  setForecastList(data: WeatherForecastDao) {
    this.weatherForecastList = data;
  }

  getForecastData() {
    return this.weatherForecastList;
  }

  async callWeatherForecastApi() {
    let promises: any = [];
    let temp_data: WeatherForecastDao;

    promises = cityName.map(item => {
      return fetch(
        'https://api.weatherapi.com/v1/forecast.json?key=' +
          FORECAST_KEY +
          '&q=' +
          item +
          '&days=5&aqi=no&alerts=no',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      ).then(data => {
        return data;
      });
    });

    await Promise.all(promises)
      .then(data => (temp_data = data))
      .catch(function handleError(error) {
        console.log('Error' + error);
      });

    console.log('I have forecast data');
    console.log(temp_data);

    this.setForecastList(temp_data);
  }
}

export default WeatherForecastRepository;
