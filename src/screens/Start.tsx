import * as React from 'react';
import {View, Text, Button} from "react-native";

class StartScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center'
      }}>
        <Text>Start Screen</Text>
      </View>
    )
  }
}

export default StartScreen;