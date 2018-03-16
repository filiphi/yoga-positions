import React from 'react';
import { View, StyleSheet } from 'react-native';

import Defaults from '../styleDefinitions';

const styles = StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Defaults.PRIMARY_COLOR,
  },
  small: {
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
  },
  medium: {
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 50,
  },
  large: {
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
  },
  triangleDown: {
    transform: [{ rotate: '180deg' }],
  },
  triangleLeft: {
    transform: [{ rotate: '-90deg' }],
  },
  triangleRight: {
    transform: [{ rotate: '90deg' }],
  },
});

const Up = ({ style = {}, color, size }) => {
  const arrowStyle = [styles.triangle, style];
  if (size) {
    arrowStyle.push(styles[size]);
  } else {
    arrowStyle.push(styles.small);
  }
  if (color) {
    arrowStyle.push({ borderBottomColor: color });
  }
  return <View style={arrowStyle} />;
};
const Left = ({ style, color, size }) => (
  <Up style={[styles.triangleLeft, style]} color={color} size={size} />
);
const Right = ({ style, color, size }) => (
  <Up style={[styles.triangleRight, style]} color={color} size={size} />
);
const Down = ({ style, color, size }) => (
  <Up style={[styles.triangleDown, style]} color={color} size={size} />
);

export default {
  Up,
  Left,
  Right,
  Down,
};
