import {computed, makeObservable, observable} from 'mobx';

class CityListStore {
  cityList: string[] = [];

  constructor() {
    makeObservable(this, {
      cityList: observable,
      getAllCity: computed,
    });
  }

  set addNewCity(cityName: string) {
    this.cityList.push(cityName);
  }

  get getAllCity() {
    return this.cityList;
  }
}

export default CityListStore;
