import {observer} from 'mobx-react';
import React, {FC, useEffect} from 'react';
import Home from '../view/Home';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const HomePageController: FC<{
  navigation: any;
  infoViewModel: WeatherInfoViewModel;
}> = observer(({navigation, infoViewModel}) => {
  const weatherInfoViewModel: WeatherInfoViewModel = infoViewModel;

  function _goToCityList() {
    navigation.navigate('CityList');
  }

  return (
    <Home
      gotoCityList={_goToCityList}
      detailData={weatherInfoViewModel.getWeatherDetail()}
    />
  );
});

export default HomePageController;
