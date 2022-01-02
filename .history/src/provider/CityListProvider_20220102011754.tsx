import React, {useContext} from 'react';
import {inject} from 'mobx-react';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';
import HomePageController from '../viewController/HomePageController';
import RootStore from '../model/RootStore';
import CityListPageController from '../viewController/CityListPageController';
import CityListViewModel from '../viewModel/CityListViewModel';

interface Props {
  navigation: any;
}

@inject(RootStore.type.WEATHER_DETAIL_STORE)
class CityListProvider extends React.Component<Props> {
  public cityListViewModel: CityListViewModel;

  constructor(props: any) {
    super(props);
    const weatherDetailRepo = props[RootStore.type.WEATHER_DETAIL_STORE];
    this.cityListViewModel = new CityListViewModel(weatherDetailRepo);
  }

  render() {
    return (
      <CityListPageController
        cityViewModel={this.cityListViewModel}
        navigation={this.props.navigation}
      />
    );
  }
}

export default CityListProvider;
