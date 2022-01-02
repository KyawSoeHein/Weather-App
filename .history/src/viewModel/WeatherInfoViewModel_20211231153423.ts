import WeatherDetailRepository from '../model/WeatherDetailRespository';

class WeatherInfoViewModel {
  constructor() {
    this.weatherDetailRepository = new WeatherDetailRepository();
  }
}

export default WeatherInfoViewModel;
