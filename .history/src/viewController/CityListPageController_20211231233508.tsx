import React, {FC} from 'react';
import CityList from '../view/CityList';

const CityListPageController: FC = () => {
  function _goToCityList(route: string) {
    navigation.navigate(route);
  }

  return <CityList />;
};

export default CityListPageController;
