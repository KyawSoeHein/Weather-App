import WeatherDetailRepository from '../model/WeatherDetailRespository';
import WeatherForecastRepository from '../model/WeatherForecastRepository';

class CityListViewModel {
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
    return this.weatherForecastRepository.getForecastData();
  }
}

export default CityListViewModel;
