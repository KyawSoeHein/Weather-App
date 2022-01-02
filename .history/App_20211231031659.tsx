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
import Home from './src/view/Home';
import CityList from './src/view/CityList';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';
import {Easing} from 'react-native';

const App = () => {
  const Stack = createStackNavigator();

  const transitionConfig = () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: sceneProps => {
        const {layout, position, scene} = sceneProps;

        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [width, 0],
        });

        return {transform: [{translateX}]};
      },
    };
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="CityList"
          component={CityList}
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
  );
};

export default App;
