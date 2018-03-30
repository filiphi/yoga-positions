import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text, View, StyleSheet, ViewPropTypes } from 'react-native';

import { NormalText } from '../text';
import Defaults from '../styleDefinitions';

// Type of buttons
// Hero - large, take over full screen
// Go - green
// stop - red
// standard - white with boarder

const styles = StyleSheet.create({
  heroButtonView: {
    borderColor: Defaults.BUTTON_PRIMARY_COLOR,
    backgroundColor: Defaults.BUTTON_PRIMARY_COLOR,
  },
  secondaryButtonView: {
    borderColor: Defaults.PRIMARY_COLOR,
    backgroundColor: Defaults.WHITE,
    borderWidth: 3,
  },
  stopButtonView: {
    borderColor: Defaults.OFF_COLOR,
    backgroundColor: Defaults.OFF_COLOR,
  },
  heroButtonText: {
    color: Defaults.WHITE,
  },
  secondaryButtonText: {
    color: Defaults.PRIMARY_COLOR,
  },
  stopButtonText: {
    color: Defaults.WHITE,
  },
  defaultButtonStyle: {
    padding: Defaults.STANDARD_MARGIN_LARGE,
    borderRadius: 10,
  },
  defaultTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const standardProps = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
  onPress: PropTypes.func.isRequired,
  viewStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
  childrenStyle: ViewPropTypes.style,
};

const DefaultButton = ({
  style = {},
  viewStyle,
  textStyle,
  children = undefined,
  onPress = () => {},
}) => {
  let content = children;
  console.log(textStyle);
  if (typeof content === 'string') {
    content = <NormalText style={[styles.defaultTextStyle, textStyle]}>{content}</NormalText>;
  }
  return (
    <TouchableHighlight activeOpacity={0.6} onPress={onPress} style={[style, { borderRadius: 10 }]}>
      <View style={[viewStyle, styles.defaultButtonStyle]}>{content}</View>
    </TouchableHighlight>
  );
};

DefaultButton.propTypes = standardProps;

const HeroButton = ({ style = {}, children, onPress = () => {} }) => (
  <DefaultButton
    style={style}
    viewStyle={styles.heroButtonView}
    textStyle={styles.heroButtonText}
    onPress={onPress}
  >
    {children}
  </DefaultButton>
);

const SecondaryButton = ({ style = {}, children, onPress = () => {} }) => (
  <DefaultButton
    style={style}
    viewStyle={styles.secondaryButtonView}
    textStyle={styles.secondaryButtonText}
    onPress={onPress}
  >
    {children}
  </DefaultButton>
);

const StopButton = ({ style = {}, children, onPress = () => {} }) => (
  <DefaultButton
    style={style}
    viewStyle={styles.stopButtonView}
    textStyle={styles.stopButtonText}
    onPress={onPress}
  >
    {children}
  </DefaultButton>
);

export { HeroButton, SecondaryButton, StopButton };
