import WeatherDetailRepository from '../model/WeatherDetailRespository';
import WeatherForecastRepository from '../model/WeatherForecastRepository';

class CityListViewModel {
  weatherDetailRepository: WeatherDetailRepository;
  weatherForecastRepository: WeatherForecastRepository;

  constructor() {
    this.weatherDetailRepository = new WeatherDetailRepository();
    this.weatherForecastRepository = new WeatherForecastRepository();
  }

  getWeatherDetail() {
    return this.weatherDetailRepository.callWeatherDetailApi();
  }

  getWeatherForecase() {
    return this.weatherForecastRepository.callWeatherDetailApi;
  }
}

export default CityListViewModel;
