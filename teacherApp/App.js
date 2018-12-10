import {createStackNavigator,} from 'react-navigation';
import React from 'react';

import Login from "./src/components/login/Login";
import Dashboard from "./src/components/dashboard/Dashboard";
import AddPresence from "./src/components/addPresence/AddPresence";
import CreateClass from "./src/components/createClass/CreateClass";
import BeaconPicker from "./src/components/beaconPicker/BeaconPicker";
import DetectBeacons from "./src/components/detectBeacons/DetectBeacons";
import CoursesList from "./src/components/coursesList/CoursesList";


const RootStack = createStackNavigator({
  Login: { screen: Login },
  Dashboard: { screen: Dashboard },
  AddPresence: { screen: AddPresence},
  CreateClass: { screen: CreateClass},
  DetectBeacons: { screen: DetectBeacons},
  BeaconPicker: { screen: BeaconPicker},
  CoursesList: { screen: CoursesList}
},
{
  // remove header from navigation
  headerMode: 'none',
  initialRouteName: 'Login',
  navigationOptions: {
    headerVisible: false,
}
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }


}