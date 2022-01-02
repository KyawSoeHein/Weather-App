import CityListStore from './CityListStore';
import WeatherDetailRepository from './WeatherDetailRespository';
import WeatherForecastRepository from './WeatherForecastRepository';

class RootStore {
  static type = {
    CITY_LIST_STORE: 'cityListStore',
    WEATHER_DETAIL_STORE: 'weatherDetailStore',
    WEATHER_FORECAST_STORE: 'weatherForecastStore',
  };
  cityListStore: CityListStore;
  public weatherDetailStore: WeatherDetailRepository;
  public weatherForecastStore: WeatherForecastRepository;

  constructor() {
    this.cityListStore = new CityListStore();
    this.weatherDetailStore = new WeatherDetailRepository();
    this.weatherForecastStore = new WeatherForecastRepository();
  }

  getStores = () => ({
    [RootStore.type.CITY_LIST_STORE]: this.cityListStore,
    [RootStore.type.WEATHER_DETAIL_STORE]: this.weatherDetailStore,
    [RootStore.type.WEATHER_FORECAST_STORE]: this.weatherForecastStore,
  });
}

export default RootStore;
