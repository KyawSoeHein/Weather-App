import {action, computed, makeObservable, observable} from 'mobx';
import WeatherDetailObject from '../ObjectModel/WeatherDetailObject';
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
    console.log('I have data now');
    console.log(dataList);
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

    console.log('I have data');
    console.log(temp_data);

    this.setWeatherData(temp_data);
  }
}

export default WeatherDetailRepository;
