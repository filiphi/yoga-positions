import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import Defaults from '../styleDefinitions';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: Defaults.PRIMARY_COLOR,
  },
});

const Input = ({ containerStyle, ...props }) => (
  <View style={containerStyle}>
    <TextInput style={styles.input} {...props} />
  </View>
);

export default Input;
