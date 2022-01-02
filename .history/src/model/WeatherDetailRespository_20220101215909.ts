import {action, computed, makeObservable, observable} from 'mobx';
import WeatherDetailObject from '../ObjectModel/WeatherDetailObject';

class WeatherDetailRepository {
  weatherDataList: Array<WeatherDetailObject> = [];
  cityID: string[] = [
    '1298822',
    '2643741',
    '2968815',
    '5368361',
    '6359304',
    '1006984',
  ];

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

  callWeatherDetailApi() {
    let promises: Array<Promise<WeatherDetailObject>> = [];
    let temp_data: Array<WeatherDetailObject> = [];

    promises = this.cityID.map(item => {
      return fetch(
        'https://api.openweathermap.org/data/2.5/weather?id=' +
          item +
          '&appid=00d3701186a5905b85a621301eee5efb&units=metric',
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

    // this.setWeatherData(temp_data);

    promises.map(promise => {
      return (
        promise
          // .then(response => response.json())
          .then(data => {
            temp_data.push(data);
          })
      );
    });

    console.log('I have data');
    console.log(temp_data);
  }
}

export default WeatherDetailRepository;
