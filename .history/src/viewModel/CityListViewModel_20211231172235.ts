import CityListStore from '../model/CityListStore';

class CityListViewModel {
  cityListStore: CityListStore;

  constructor() {
    this.cityListStore = new CityListStore();
  }
}

export default CityListViewModel;
