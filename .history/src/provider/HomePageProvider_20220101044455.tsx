import React, {FC} from 'react';
import HomePageController from '../viewController/HomePageController';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const HomePageProvider: FC<{navigation: any}> = ({navigation}) => {
  weatherInfoViewModel: WeatherInfoViewModel;

  return <HomePageController navigation={navigation} />;
};

export default HomePageProvider;
