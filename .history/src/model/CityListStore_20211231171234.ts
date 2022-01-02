import {makeObservable, observable} from 'mobx';

class CityListStore {
  cityList: string[] = [];

  constructor() {
    makeObservable(this, {
      cityList: observable,
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
