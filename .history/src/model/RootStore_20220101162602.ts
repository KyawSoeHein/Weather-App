import CityListStore from './CityListStore';
import WeatherDetailRepository from './WeatherDetailRespository';
import WeatherForecastRepository from './WeatherForecastRepository';

class RootStore {
  static type = {
    CITY_LIST_STORE: 'cityListStore',
    WEATHER_DETAIL_STORE: 'weatherDetailStore',
    WEATHER_FORECAST_STORE: 'weatherForecastStore',
  };
  public cityListStore: CityListStore;
  public weatherDetailStore: WeatherDetailRepository;
  public weatherForecastStore: WeatherForecastRepository;

  constructor() {
    this.cityListStore = new CityListStore();
    this.weatherDetailStore = new WeatherDetailRepository();
    this.weatherForecastStore = new WeatherForecastRepository();
  }

  getCityListStore() {
    return this.cityListStore;
  }
}

export default RootStore;
