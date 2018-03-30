import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, View, TouchableHighlight, SafeAreaView } from 'react-native';

import Defaults from '../../components/styleDefinitions';
import YogaPosition from '../../components/yogaPosition';
import { scramblePositions } from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Defaults.STANDARD_MARGIN_LARGE,
    marginTop: Defaults.STANDARD_MARGIN_LARGE,
    marginRight: Defaults.STANDARD_MARGIN_LARGE,
    backgroundColor: '#fff',
  },
  margin: {
    marginTop: Defaults.STANDARD_MARGIN_LARGE,
  },
  scrollView: {},
});

const Home = ({ data }) => {
  const { positions } = data;
  const positionList = positions.map(position => (
    <YogaPosition key={position.englishName} {...position} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{positionList}</ScrollView>
    </SafeAreaView>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    positions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const mapStateToProps = state => ({
  data: state.positionsReducer,
});

export default connect(mapStateToProps)(Home);
