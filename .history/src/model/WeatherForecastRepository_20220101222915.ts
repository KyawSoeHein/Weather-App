import {action, makeObservable, observable} from 'mobx';
import {act} from 'react-test-renderer';

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
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}',
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
