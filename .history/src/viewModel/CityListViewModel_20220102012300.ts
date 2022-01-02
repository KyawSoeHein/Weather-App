import WeatherDetailRepository from '../model/WeatherDetailRespository';
import WeatherForecastRepository from '../model/WeatherForecastRepository';

class CityListViewModel {
  weatherDetailRepository: WeatherDetailRepository;
  weatherForecastRepository: WeatherForecastRepository;

  constructor(detailRepo: WeatherDetailRepository) {
    this.weatherDetailRepository = detailRepo;
  }

  getWeatherDetail() {
    return this.weatherDetailRepository.getWeatherDetailData();
  }
}

export default CityListViewModel;
