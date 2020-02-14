/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeStack from './src/navigations/NavStack';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'

AppRegistry.registerComponent(appName, () => HomeStack);
