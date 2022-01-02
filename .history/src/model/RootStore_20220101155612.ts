import CityListStore from './CityListStore';
import WeatherDetailRepository from './WeatherDetailRespository';
import WeatherForecastRepository from './WeatherForecastRepository';

class RootStore {
  static type = {
    CITY_LIST_STORE: 'cityListStore',
  };
  public counterModel: CounterModel;

  constructor() {
    this.counterModel = new CounterModel();
  }

  getStores = () => ({
    [RootStore.type.COUNTER_MODEL]: this.counterModel,
  });
}

export default RootStore;
