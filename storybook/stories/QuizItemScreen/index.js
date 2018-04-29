import React from 'react';
import { View, StyleSheet } from 'react-native';

import positions from '../../../src/data/positions';
import QuizItemView from '../../../src/views/quizItem';
import { QuizContext, quizLanguages } from '../../../src/context/quizContext';
import { HeroButton, SecondaryButton, StopButton } from '../../../src/components/buttons';
import Defaults from '../../../src/components/styleDefinitions';

const func = () => {
  console.log('press');
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Defaults.STANDARD_MARGIN_LARGE,
  },
});

const QuizItemScreen = ({ languageSetup }) => (
  <QuizContext.Provider value={languageSetup}>
    <QuizItemView position={positions[0]} />
  </QuizContext.Provider>
);

export { QuizItemScreen as default };
