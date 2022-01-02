import React from 'react';
import {inject} from 'mobx-react';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';
import HomePageController from '../viewController/HomePageController';

class HomePageProvider extends React.Component {
  public weatherInfoViewModel: WeatherInfoViewModel;

  constructor(props: any) {
    super(props);
    const weatherInfoRepo = this.props[RootStore.type];
    this.weatherInfoViewModel = new WeatherInfoViewModel(weatherInfoRepo);
  }

  render() {
    return <HomePageController viewModel={this.viewModel} />;
  }
}

export default HomePageProvider;
