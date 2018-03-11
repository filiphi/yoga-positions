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

const Header = props => <Text style={styles.headerText}>{props.children}</Text>;
const LargeText = props => <Text style={styles.largeText}>{props.children}</Text>;
const NormalText = props => <Text style={styles.normal}>{props.children}</Text>;
const SmallText = props => <Text style={styles.smallText}>{props.children}</Text>;

const props = {
  children: PropTypes.string.isRequired,
};

Header.propTypes = props;
LargeText.propTypes = props;
NormalText.propTypes = props;
SmallText.propTypes = props;

export { Header, LargeText, NormalText, SmallText };
