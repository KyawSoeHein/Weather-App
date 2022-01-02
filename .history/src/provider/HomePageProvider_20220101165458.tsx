import React, {useContext} from 'react';
import {inject} from 'mobx-react';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';
import HomePageController from '../viewController/HomePageController';
import RootStore from '../model/RootStore';

@inject(RootStore.type.WEATHER_DETAIL_STORE)
class HomePageProvider extends React.Component {
  public weatherInfoViewModel: WeatherInfoViewModel;

  constructor(props: any) {
    super(props);
    const weatherInfoRepo = props[RootStore.type.WEATHER_DETAIL_STORE];
    this.weatherInfoViewModel = new WeatherInfoViewModel(weatherInfoRepo);
  }

  render() {
    return (
      <HomePageController
        infoViewModel={this.weatherInfoViewModel}
        navigation={undefined}
      />
    );
  }
}

export default HomePageProvider;
