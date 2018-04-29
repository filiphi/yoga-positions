import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch, StyleSheet } from 'react-native';

import { NormalText } from '../text';
import Defaults from '../styleDefinitions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  switch: {
    marginRight: Defaults.STANDARD_MARGIN,
  },
});

const SwitchLabel = ({ label, value, onValueChange }) => (
  <View style={styles.container}>
    <Switch style={styles.switch} value={value} onValueChange={onValueChange} />
    <NormalText>{label}</NormalText>
  </View>
);

SwitchLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
};

SwitchLabel.defaultProps = {
  value: false,
};

export default SwitchLabel;
