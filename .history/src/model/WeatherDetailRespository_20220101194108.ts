import {action, makeObservable, observable} from 'mobx';
import WeatherDetailObject from '../ObjectModel/WeatherDetailObject';

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

  setWeatherData(data: WeatherDetailObject) {
    console.log('I have dta now');
    this.weatherDataList.push(data);
  }

  callWeatherDetailApi() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?id=1006984&appid=00d3701186a5905b85a621301eee5efb&units=metric',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => this.setWeatherData(data));
  }
}

export default WeatherDetailRepository;
