import React, {FC} from 'react';
import HomePageController from '../viewController/HomePageController';

const HomePageProvider: FC<{navigation: any}> = ({navigation}) => {
  return <HomePageController navigation={navigation} />;
};

export default HomePageProvider;
