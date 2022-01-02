import React, {useContext} from 'react';
import {inject} from 'mobx-react';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';
import HomePageController from '../viewController/HomePageController';
import RootStore from '../model/RootStore';
import CityListPageController from '../viewController/CityListPageController';

interface Props {
  navigation: any;
}

@inject(RootStore.type.WEATHER_DETAIL_STORE)
class CityListProvider extends React.Component<Props> {
  public weatherInfoViewModel: WeatherInfoViewModel;

  constructor(props: any) {
    super(props);
    const weatherDetailRepo = props[RootStore.type.WEATHER_DETAIL_STORE];
    this.weatherInfoViewModel = new WeatherInfoViewModel(
      weatherDetailRepo,
      weatherForecastRepo,
    );
  }

  render() {
    return (
      <CityListPageController
        infoViewModel={this.weatherInfoViewModel}
        navigation={this.props.navigation}
      />
    );
  }
}

export default CityListProvider;
