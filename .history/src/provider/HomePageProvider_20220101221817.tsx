import React, {useContext} from 'react';
import {inject} from 'mobx-react';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';
import HomePageController from '../viewController/HomePageController';
import RootStore from '../model/RootStore';

interface Props {
  navigation: any;
}

@inject(
  RootStore.type.WEATHER_DETAIL_STORE,
  RootStore.type.WEATHER_FORECAST_STORE,
)
class HomePageProvider extends React.Component<Props> {
  public weatherInfoViewModel: WeatherInfoViewModel;

  constructor(props: any) {
    super(props);
    const weatherDetailRepo = props[RootStore.type.WEATHER_DETAIL_STORE];
    const weatherForecastRepo = props[RootStore.type.WEATHER_FORECAST_STORE];
    this.weatherInfoViewModel = new WeatherInfoViewModel(weatherDetailRepo);
  }

  render() {
    return (
      <HomePageController
        infoViewModel={this.weatherInfoViewModel}
        navigation={this.props.navigation}
      />
    );
  }
}

export default HomePageProvider;
