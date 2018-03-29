import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView, View, TouchableHighlight, SafeAreaView } from 'react-native';

import Defaults from '../../components/styleDefinitions';
import YogaPosition from '../../components/yogaPosition';
import { HeroButton } from '../../components/buttons';
import { scramblePositions } from '../../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#fff',
  },
  margin: {
    marginTop: Defaults.STANDARD_MARGIN_LARGE,
  },
  scrollView: {},
});

const Home = ({ data, onScrambleYogaPositions }) => {
  const { scrambledPositions } = data;
  const positionList = scrambledPositions.map((position) => {
    const showSanskritName = Math.random() >= 0.5;
    const showEnglishName = Math.random() >= 0.5;
    return (
      <YogaPosition
        showSanskritName={showSanskritName}
        showEnglishName={showEnglishName}
        {...position}
      />
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{positionList}</ScrollView>
      <HeroButton style={styles.margin} onPress={onScrambleYogaPositions}>
				Scramble Positions
      </HeroButton>
    </SafeAreaView>
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
