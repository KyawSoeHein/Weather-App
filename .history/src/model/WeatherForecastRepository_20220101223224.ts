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
  }

  setForecastList(dataList: any) {
    this.weatherForcastList = [...dataList];
  }

  getForecastData() {
    return this.weatherForcastList;
  }

  callWeatherDetailApi() {
    let promises: any = [];
    let temp_data: any = [];

    promises = cityID.map(item => {
      return fetch(
        'https://api.openweathermap.org/data/2.5/forecast/daily?id={city ID}&cnt={cnt}&appid=' +
          OPEN_WEATHER_KEY,
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
  }
}

export default WeatherForecastRepository;
