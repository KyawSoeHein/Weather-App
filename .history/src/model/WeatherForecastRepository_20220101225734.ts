import {action, makeObservable, observable} from 'mobx';
import {act} from 'react-test-renderer';
import {cityID, OPEN_WEATHER_KEY} from '../../utils/Constants';

class WeatherForecastRepository {
  weatherForcastList: any = [];
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
    let temp_data: any = [];

    promises = cityID.map(item => {
      return fetch(
        'http://api.weatherapi.com/v1/forecast.json?key=ccb5ff8268ce4f64b70162244220101&q=London&days=5&aqi=no&alerts=no',
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

    console.log('I have forecase data');
    console.log(temp_data);
  }
}

export default WeatherForecastRepository;
