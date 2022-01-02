/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/view/Home';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

AppRegistry.registerComponent(appName, () => Home);
