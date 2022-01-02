import React, {FC} from 'react';
import CityList from '../view/CityList';

const CityListPageController: FC = () => {
  function _goToHomePage() {
    navigation.navigate('Home');
  }

  return <CityList />;
};

export default CityListPageController;
