import {action, computed, makeObservable, observable} from 'mobx';
import WeatherDetailObject from '../ObjectModel/WeatherDetailObject';

class WeatherDetailRepository {
  weatherDataList: Array<WeatherDetailObject> = [];
  cityID: string[] = ['1298822', '2643741', '2968815', '5368361', '6359304'];

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
    console.log('I have data now');
    this.weatherDataList = [...this.weatherDataList, data, data];
  }

  callWeatherDetailApi() {
    const temp_data = [];

    this.cityID.map(item => {
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
    });
  }
}

export default WeatherDetailRepository;
