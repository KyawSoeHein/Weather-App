import React, {useContext} from 'react';
import {inject} from 'mobx-react';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';
import HomePageController from '../viewController/HomePageController';
import RootStore from '../model/RootStore';

interface Props {
  navigation: any;
}

@inject(RootStore.type.WEATHER_DETAIL_STORE)
class HomePageProvider extends React.Component<Props> {
  public weatherInfoViewModel: WeatherInfoViewModel;

  constructor(props: any) {
    super(props);
    const weatherInfoRepo = props[RootStore.type.WEATHER_DETAIL_STORE];
    this.weatherInfoViewModel = new WeatherInfoViewModel(weatherInfoRepo);

    console.log('props is ');
    console.log(this.props);
  }

  render() {
    return (
      <HomePageController
        infoViewModel={this.weatherInfoViewModel}
        navigation={}
      />
    );
  }
}

export default HomePageProvider;
