import * as React from 'react';
import {View, Text} from "react-native";

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center'
      }}>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}

export default SettingsScreen;