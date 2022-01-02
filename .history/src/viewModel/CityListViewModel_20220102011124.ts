import WeatherDetailRepository from '../model/WeatherDetailRespository';
import WeatherForecastRepository from '../model/WeatherForecastRepository';

class CityListViewModel {
  weatherDetailRepository: WeatherDetailRepository;

  constructor(detailRepo: WeatherDetailRepository) {
    this.weatherDetailRepository = detailRepo;
  }

  getWeatherDetail() {
    return this.weatherDetailRepository.getWeatherDetailData();
  }

  getWeatherForecast() {
    return this.weatherForecastRepository.getForecastData();
  }
}

export default CityListViewModel;
