import WeatherDetailRepository from '../model/WeatherDetailRespository';

class WeatherInfoViewModel {
  weatherDetailRepository: WeatherDetailRepository;
  constructor() {
    this.weatherDetailRepository = new WeatherDetailRepository();
  }
}

export default WeatherInfoViewModel;
