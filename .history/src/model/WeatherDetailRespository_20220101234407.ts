import {action, computed, makeObservable, observable} from 'mobx';
import WeatherDetailObject from '../Dao/WeatherDetailDao';
import {cityID, OPEN_WEATHER_KEY} from '../../utils/Constants';

class WeatherDetailRepository {
  weatherDataList: Array<WeatherDetailObject> = [];

  constructor() {
    makeObservable(this, {
      weatherDataList: observable,
      setWeatherData: action,
    });

    this.callWeatherDetailApi();
  }

  getWeatherDetailData() {
    return this.weatherDataList;
  }

  setWeatherData(dataList: Array<WeatherDetailObject>) {
    this.weatherDataList = [...dataList];
  }

  async callWeatherDetailApi() {
    let promises: Array<Promise<WeatherDetailObject>> = [];
    let temp_data: Array<WeatherDetailObject> = [];

    promises = cityID.map(item => {
      return fetch(
        'https://api.openweathermap.org/data/2.5/weather?id=' +
          item +
          '&appid=' +
          OPEN_WEATHER_KEY +
          '&units=metric',
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

    this.setWeatherData(temp_data);
  }
}

export default WeatherDetailRepository;
