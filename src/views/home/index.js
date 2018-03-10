import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = (data) => {
  const { words } = data;
  // const wordsz = ['hello', 'goodbye'];
  const wordList = words.map(word => (<Text>{word}</Text>));
  return (
    <View style={styles.container}>
      { wordList }
      <Text>It doesnt.... Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
    </View>
  );
};

const mapStateToProps = state => (
  { ...state.dataReducer }
);

export default connect(mapStateToProps)(Home);
