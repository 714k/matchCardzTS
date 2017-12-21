/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import * as PrimaryNav from "./components/AppNavigation";
import * as DrawerNavigation from "./config/router";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default class App extends React.Component<object, object> {
  static navigationOptions = {
    drawerLabel: 'Home'
  };

  render() {
    // const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>matchCardz</Text> 
      </View>
    );
  }
}

