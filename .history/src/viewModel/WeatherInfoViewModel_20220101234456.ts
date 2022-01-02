import WeatherDetailRepository from '../model/WeatherDetailRespository';
import WeatherForecastRepository from '../model/WeatherForecastRepository';

class WeatherInfoViewModel {
  weatherDetailRepository: WeatherDetailRepository;
  weatherForecastRepository: WeatherForecastRepository;

  constructor(
    detailRepo: WeatherDetailRepository,
    forecastRepo: WeatherForecastRepository,
  ) {
    this.weatherDetailRepository = detailRepo;
    this.weatherForecastRepository = forecastRepo;
  }

  getWeatherDetail() {
    return this.weatherDetailRepository.getWeatherDetailData();
  }

  getWeatherForecast() {
    return this.weatherForecastRepository.callWeatherForecastApi();
  }
}

export default WeatherInfoViewModel;
