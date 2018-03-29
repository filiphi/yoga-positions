import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { LargeText } from '../text';
import Defaults from '../styleDefinitions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: Defaults.PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  canvas: {
    width: 300,
    height: 300,
  },
});

const yogaPosition = ({
  englishName,
  sanskritName,
  imageUrl,
  showEnglishName,
  showSanskritName,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <LargeText>{showEnglishName ? englishName : '*****'}</LargeText>
      <View>
        <Image style={styles.canvas} source={{ uri: imageUrl }} resizeMode="contain" />
      </View>
      <LargeText>{showSanskritName ? sanskritName : '*****'}</LargeText>
    </View>
  </TouchableOpacity>
);

yogaPosition.propTypes = {
  englishName: PropTypes.string.isRequired,
  sanskritName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  showEnglishName: PropTypes.bool,
  showSanskritName: PropTypes.bool,
  onPress: PropTypes.func,
};
yogaPosition.defaultProps = {
  showEnglishName: true,
  showSanskritName: true,
  onPress: () => {},
};
export default yogaPosition;
