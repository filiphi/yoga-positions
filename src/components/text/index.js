import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import Defaults from '../styleDefinitions';

const styles = StyleSheet.create({
  headerText: {
    color: Defaults.PRIMARY_COLOR,
    fontSize: Defaults.FONT_SIZE_HEADER,
  },
  largeText: {
    color: Defaults.PRIMARY_COLOR,
    fontSize: Defaults.FONT_SIZE_LARGE,
  },
  normal: {
    color: Defaults.PRIMARY_COLOR,
    fontSize: Defaults.FONT_SIZE_MEDIUM,
  },
  smallText: {
    color: Defaults.PRIMARY_COLOR,
    fontSize: Defaults.FONT_SIZE_SMALL,
  },
});

const Header = ({ style = {}, children }) => (
  <Text style={[styles.headerText, style]}>{children}</Text>
);
const LargeText = ({ style = {}, children }) => (
  <Text style={[styles.largeText, style]}>{children}</Text>
);
const NormalText = ({ style = {}, children }) => (
  <Text style={[styles.normal, style]}>{children}</Text>
);
const SmallText = ({ style = {}, children }) => (
  <Text style={[styles.smallText, style]}>{children}</Text>
);

const props = {
  children: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};

Header.propTypes = props;
LargeText.propTypes = props;
NormalText.propTypes = props;
SmallText.propTypes = props;

export { Header, LargeText, NormalText, SmallText };
