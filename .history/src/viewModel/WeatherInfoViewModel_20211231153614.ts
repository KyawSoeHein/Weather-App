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
    return this.weatherDetailRepository.callWeatherDetailApi();
  }
}

export default WeatherInfoViewModel;
