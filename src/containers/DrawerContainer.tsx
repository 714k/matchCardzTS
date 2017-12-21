import * as React from 'react';
import { 
  StyleSheet,
  Text,
  View, 
  Image 
} from "react-native";
import { NavigationActions } from "react-navigation";

class DrawerContainer extends React.Component {
  logout = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName: 'loginStack'
        })
      ]
    });
    // this.props.navigation.dispatch(actionToDispatch);
  }

  render() {
    const { navigation }: any = this.props;
    return (
      <View>
        <Text
          onPress={() => navigation.navigate('home')}>
          Home
        </Text>
        <Text
          onPress={() => navigation.navigate('cardz')}>
          Cardz
        </Text>
        <Text
          onPress={() => navigation.navigate('settings')}>
          Settings
        </Text>
      </View>
    );
  }
}

export default DrawerContainer;