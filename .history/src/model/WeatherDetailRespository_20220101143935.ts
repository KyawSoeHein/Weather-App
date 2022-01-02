import {action, makeObservable, observable} from 'mobx';

class WeatherDetailRepository {
  weatherDataList: Array<JSON> = [];

  constructor() {
    makeObservable(this, {
      weatherDataList: observable,
      setWeatherData: action,
    });

    this.callWeatherDetailApi();
  }

  getWeatherData() {
    console.log('I am called Hi');

    return this.weatherDataList;
  }

  setWeatherData(data: JSON) {
    console.log(data);

    this.weatherDataList.push(data);
  }

  callWeatherDetailApi() {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?id=1006984&appid=00d3701186a5905b85a621301eee5efb',
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
