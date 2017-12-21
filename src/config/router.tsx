import * as React from 'react';
import { DrawerNavigator } from "react-navigation";
import * as HomeScreen from '../screens/Home';
import * as SettingsScreen from '../screens/Settings';

const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ( {navigation} : { navigation: any} ) => ({
      headerTitle: 'Settings',
      url: `${navigation.state.params}`
    })
  }
});

export default DrawerNavigation;