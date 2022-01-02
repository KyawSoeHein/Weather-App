import WeatherDetailRepository from '../model/WeatherDetailRespository';
import WeatherForecastRepository from '../model/WeatherForecastRepository';

class WeatherInfoViewModel {
  weatherDetailRepository: WeatherDetailRepository;
  weatherForecastRepository: WeatherForecastRepository;

  constructor() {
    this.weatherDetailRepository = new WeatherDetailRepository();
    this.weatherForecastRepository = new WeatherForecastRepository();
  }

  getWeatherDetail() {
    console.log('I am here');
    return this.weatherDetailRepository.getWeatherData();
  }

  getWeatherForecase() {
    return this.weatherForecastRepository.callWeatherDetailApi;
  }
}

export default WeatherInfoViewModel;
