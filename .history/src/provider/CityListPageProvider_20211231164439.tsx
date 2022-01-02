import React, {FC} from 'react';
import CityListPageController from '../viewController/CityListPageController';

const CityListPageProvider: FC<{navigation: any}> = ({navigation}) => {
  return <CityListPageController />;
};

export default CityListPageProvider;
