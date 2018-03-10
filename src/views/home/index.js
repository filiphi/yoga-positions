import React from 'react';
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

const Home = (data) => {
  // const { scrambledPositions } = data; // TODO:: Fix this deconstruction
  console.log(data.data.scrambledPositions);
  console.log(data.onScrambleYogaPositions);

  const positionList = data.data.scrambledPositions.map((position, i) => (<Text key={position.englishName + '${i}'}>{position.englishName}</Text>));
  return (
    <View style={styles.container}>
      { positionList }
      <TouchableHighlight
        onPress={data.onScrambleYogaPositions}
      >
        <Text>Scramble Positions</Text>
      </TouchableHighlight>
    </View>
  );
};

const mapStateToProps = state => (
  { data: state.dataReducer }
);

const mapDispatchToProps = dispatch => (
  {
    onScrambleYogaPositions: () => {
      scramblePositions(dispatch);
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
