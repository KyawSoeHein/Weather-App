import {action, makeObservable, observable} from 'mobx';
import {act} from 'react-test-renderer';
import {cityName, FORECAST_KEY} from '../../utils/Constants';
import WeatherForecastDao from '../Dao/WeatherForecastDao';

class WeatherForecastRepository {
  weatherForcastList: Array<WeatherForecastDao> = [];
  constructor() {
    makeObservable(this, {
      weatherForcastList: observable,
      setForecastList: action,
    });

    this.callWeatherForecastApi();
  }

  setForecastList(dataList: any) {
    this.weatherForcastList = [...dataList];
  }

  getForecastData() {
    return this.weatherForcastList;
  }

  async callWeatherForecastApi() {
    let promises: any = [];
    let temp_data: Array<WeatherForecastDao> = [];

    promises = cityName.map(item => {
      return fetch(
        'https://api.weatherapi.com/v1/forecast.json?key=' +
          FORECAST_KEY +
          '&q=' +
          item +
          '&days=7&aqi=no&alerts=no',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )
        .then(response => response.json())
        .then(data => {
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
