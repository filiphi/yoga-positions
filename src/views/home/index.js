import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { scramblePositions } from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = ({ data, onScrambleYogaPositions }) => {
  const { scrambledPositions } = data;
  const positionList = scrambledPositions.map(position => (
    <Text key={`${position.englishName}`}>{position.englishName}</Text>
  ));

  return (
    <View style={styles.container}>
      {positionList}
      <TouchableHighlight onPress={onScrambleYogaPositions}>
        <Text>Scramble Positions</Text>
      </TouchableHighlight>
    </View>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    scrambledPositions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  onScrambleYogaPositions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.scrambledPositionsReducer,
});

const mapDispatchToProps = dispatch => ({
  onScrambleYogaPositions: () => {
    scramblePositions(dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
