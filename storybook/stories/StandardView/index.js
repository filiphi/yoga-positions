import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import Defaults from '../../../src/components/styleDefinitions';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: Defaults.STANDARD_MARGIN_LARGE,
  },
});

const StandardView = props => <View style={styles.main}>{props.children}</View>;

StandardView.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StandardView as default };
