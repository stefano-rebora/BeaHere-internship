/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import { createStackNavigator, } from 'react-navigation';
import Home from './src/component/Home';
import Dashboard from './src/component/Dashboard';
import SignIn from './src/component/SignIn';

const App = createStackNavigator(
  {
    home: { screen: Home },
    dashboard: { screen: Dashboard },
    signin: { screen: SignIn }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);
export default App;