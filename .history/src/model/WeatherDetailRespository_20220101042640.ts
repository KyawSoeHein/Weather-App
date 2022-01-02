import {makeObservable, observable} from 'mobx';

class WeatherDetailRepository {
  weatherData!: JSON;

  constructor() {
    makeObservable(this, {
      weatherData: observable,
    });
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
      .then(data => (this.weatherData = data));
  }
}

export default WeatherDetailRepository;
