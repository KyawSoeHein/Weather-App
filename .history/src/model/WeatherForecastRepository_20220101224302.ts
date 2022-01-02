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

    this.callWeatherForecastApi();
  }

  setForecastList(dataList: any) {
    this.weatherForcastList = [...dataList];
  }

  getForecastData() {
    return this.weatherForcastList;
  }

  async callWeatherForecastApi() {
    let promises: any = [];
    let temp_data: any = [];

    promises = cityID.map(item => {
      return fetch(
        'https://api.openweathermap.org/data/2.5/forecast/daily?id=' +
          item +
          '&cnt=5&appid=' +
          'aa070e062f2312ab0d31d7a3b08a9c29' +
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

    console.log('I have forecase data');
    console.log(temp_data);
  }
}

export default WeatherForecastRepository;
