import * as React from "react";
import { View, Text } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";

const HomeScreen = () => {
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
};

const SettingsScreen = () => {
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Text>Settings Screen</Text>
  </View>
};

const PrimaryNav = StackNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Settings : {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: 'Settings'
    }
  }
}, {
  // default config for all screens
  headerMode: 'none',
  initialRouteName: 'Home'
});

const RootNavigation = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions : {
      headerTitle: 'Settings'
    }
}
});

// export default RootNavigation;
export default PrimaryNav;