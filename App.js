import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import StorybookScreen from 'src/storybook'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>It doesnt update.... Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button onPress=()=>{console.log('storybook')}>Press here for Storybook</Button>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
