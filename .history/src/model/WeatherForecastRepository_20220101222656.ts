import {makeObservable, observable} from 'mobx';

class WeatherForecastRepository {
  weatherForcastList: any = [];
  constructor() {
    makeObservable(this, {
      weatherForcastList: observable,
    });
  }

  setForecastList(dataList: any) {
    this.weatherForcastList = [...dataList];
  }

  getForecastData() {
    return this.weatherForcastList;
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
      .then(data => console.log(data));
  }
}

export default WeatherForecastRepository;
