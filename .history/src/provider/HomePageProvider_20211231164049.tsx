import React, {FC} from 'react';
import DetailPageController from '../viewController/DetailPageController';

const HomePageProvider: FC<{navigation: any}> = ({navigation}) => {
  return <DetailPageController navigation={navigation} />;
};

export default HomePageProvider;
