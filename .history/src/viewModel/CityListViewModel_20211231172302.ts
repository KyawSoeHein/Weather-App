import CityListStore from '../model/CityListStore';

class CityListViewModel {
  cityListStore: CityListStore;

  constructor() {
    this.cityListStore = new CityListStore();
  }

  get getCityList() {
    return this.cityListStore.getAllCity;
  }
}

export default CityListViewModel;
