import React from 'react';
import {inject} from 'mobx-react';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';
import HomePageController from '../viewController/HomePageController';
import {View} from 'react-native';

class HomePageProvider extends React.Component {
  public weatherInfoViewModel: WeatherInfoViewModel;

  constructor(props: any) {
    super(props);
    // const weatherInfoRepo = this.props[RootStore.type];
    this.weatherInfoViewModel = new WeatherInfoViewModel();
    console.log('Props is');

    console.log(this.props);
  }

  render() {
    return <View />;
  }
}

export default HomePageProvider;
