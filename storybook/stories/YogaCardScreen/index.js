import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import YogaPosition from '../../../src/components/yogaPosition';
import Defaults from '../../../src/components/styleDefinitions';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Defaults.STANDARD_MARGIN_LARGE,
  },
});

const YogaPositionScreen = ({ position }) => (
  <View>
    <YogaPosition {...position} />
  </View>
);

YogaPositionScreen.propTypes = {
  position: PropTypes.shape({
    englishName: PropTypes.string,
    sanskritName: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export { YogaPositionScreen as default };
