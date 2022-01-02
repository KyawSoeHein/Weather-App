import {makeObservable, observable} from 'mobx';

class CityListStore {
  cityList = [];

  constructor() {
    makeObservable(this, {
      cityList: observable,
    });
  }

  set addNewCity(cityName: string) {
    this.cityList.push(cityName);
  }
}

export default CityListStore;
