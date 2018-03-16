import React from 'react';
import { View, StyleSheet } from 'react-native';

import { HeroButton, SecondaryButton, StopButton } from '../../../src/components/buttons';
import Defaults from '../../../src/components/styleDefinitions';

const func = () => {
  console.log('press');
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Defaults.STANDARD_MARGIN_LARGE,
  },
});

const ButtonScreen = () => (
  <View>
    <View style={styles.buttonContainer}>
      <HeroButton onPress={func}>Header</HeroButton>
    </View>
    <View style={styles.buttonContainer}>
      <SecondaryButton onPress={func}>Secondary</SecondaryButton>
    </View>
    <View style={styles.buttonContainer}>
      <StopButton onPress={func}>Stop</StopButton>
    </View>
  </View>
);

export { ButtonScreen as default };
