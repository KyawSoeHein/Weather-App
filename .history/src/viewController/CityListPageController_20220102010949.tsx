import React, {FC} from 'react';
import CityList from '../view/CityList';
import WeatherInfoViewModel from '../viewModel/WeatherInfoViewModel';

const CityListPageController: FC<{
  navigation: any;
  infoViewModel: WeatherInfoViewModel;
}> = ({navigation, infoViewModel}) => {
  function _goToHomePage() {
    navigation.navigate('Home');
  }

  return <CityList goToHomePage={_goToHomePage} />;
};

export default CityListPageController;
