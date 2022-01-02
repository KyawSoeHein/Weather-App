import WeatherDetailRepository from '../model/WeatherDetailRespository';

class WeatherInfoViewModel {
  weatherDetailRespository = new WeatherDetailRepository();

  constructor() {}
}

export default WeatherInfoViewModel;
