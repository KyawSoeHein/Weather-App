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
}

export default CityListViewModel;
