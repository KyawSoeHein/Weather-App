/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomePageProvider from './src/Provider/HomePageProvider';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';
import RootStore from './src/model/RootStore';
import {Provider} from 'mobx-react';
import CityListProvider from './src/Provider/CityListProvider';

const App = () => {
  const Stack = createStackNavigator();
  const rootStore = new RootStore();

  return (
    <Provider {...rootStore.getStores()}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomePageProvider} />
          <Stack.Screen
            name="CityList"
            component={CityListProvider}
            options={{
              gestureDirection: 'horizontal-inverted',
              gestureResponseDistance: 150,
              transitionSpec: {
                open: TransitionSpecs.RevealFromBottomAndroidSpec,
                close: TransitionSpecs.RevealFromBottomAndroidSpec,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
