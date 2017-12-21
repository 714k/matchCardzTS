import * as React from "react";
import { 
  View, 
  Text,
  Animated,
  Easing
} from "react-native";

import { StackNavigator, DrawerNavigator } from "react-navigation";

import LoginScreen from '../../screens/Login';
import HomeScreen from '../../screens/Home';
import SignupScreen from '../../screens/Signup';
import ForgottPasswordScreen from '../../screens/ForgottPassword';
import CardzScreen from '../../screens/Cardz';
import StartScreen from '../../screens/Start';
import SettingsScreen from '../../screens/Settings';

import * as DrawerContainer from "../../containers/DrawerContainer";

const DrawerStack = DrawerNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  ForgottPassword: { screen: ForgottPasswordScreen },
  Home: { screen: HomeScreen },
  Cardz: { screen: CardzScreen },
  Start: { screen: StartScreen },
  Settings: { screen: SettingsScreen },
})

const drawerButton = ( {navigation} :  {navigation:any} ) => {
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => {
      if(navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }}>
    Menu
  </Text>
}

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack, contentComponent: DrawerContainer }
}, {
  headerMode: 'float'
})

export default DrawerNavigation;