import React, {FC} from 'react';
import Home from '../view/Home';

const DetailPageController: FC<{navigation: any}> = ({navigation}) => {
  return <Home navigation={navigation} />;
};
