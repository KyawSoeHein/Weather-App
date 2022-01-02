import {makeObservable, observable} from 'mobx';

class CityListStore {
  cityList = [];

  constructor() {
    makeObservable(this, {
      cityList: observable,
    });
  }
}

export default CityListStore;
