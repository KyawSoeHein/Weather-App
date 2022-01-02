import React, {FC} from 'react';
import CityList from '../view/CityList';

const CityListPageController: FC<{navigation: any}> = ({navigation}) => {
  function _goToHomePage() {
    navigation.navigate('Home');
  }

  return <CityList />;
};

export default CityListPageController;
