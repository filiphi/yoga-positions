import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image } from 'react-native';

import { LargeText } from '../text';
import Triangles from '../triangles';
import Defaults from '../styleDefinitions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  canvas: {
    width: 300,
    height: 300,
  },
});

const yogaPosition = ({ englishName, sanskritName, imageUrl }) => (
  <View style={styles.container}>
    <LargeText>{englishName}</LargeText>
    <View>
      <Image style={styles.canvas} source={{ uri: imageUrl }} resizeMode="contain" />
    </View>
    <LargeText>{sanskritName}</LargeText>
    <Triangles.Right color={Defaults.SECONDARY_COLOR} />
  </View>
);

yogaPosition.propTypes = {
  englishName: PropTypes.string.isRequired,
  sanskritName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default yogaPosition;
