import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { View, Text } from 'react-native';
// What is the functionality?
// 1. Get a list of positions (scrambled)
// 2. Choose language to test (set context)
// 3. Keep track of index (set context)

// Lets evaluate using context:
// The context consists of:
// - whats being tested
// - update whats being
// - index in test
// - reset test
// {
//   typeOfTest: english / sanskrit / all
//   setLanguage: () => ()
//   index: 0
//   goForward: () => ()
//   reset: () => ()
// }

class QuizController extends React.Component {
  constructor() {
    super();
    this.state = {
      quizState: 'initialize',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      quizState: 'started',
    });
  }

  render() {
    return (
      <View>
        {this.state.quizState === 'initialize' ? <Text>Initialize</Text> : <Text>Started</Text>}
      </View>
    );
  }
}

QuizController.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizController);
