import * as React from 'react';
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style = {{ flex: 1, alignItems: 'center' }} >
        <Text>Home Screen</Text>
      </View>
    )
  }  
}

export default HomeScreen;