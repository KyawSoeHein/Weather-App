import React, {FC} from 'react';
import CityListViewModel from '../viewModel/CityListViewModel';
import CityList from '../view/CityList';

const CityListPageController: FC<{navigation: any}> = ({navigation}) => {
  return <CityList />;
};

export default CityListPageController;
