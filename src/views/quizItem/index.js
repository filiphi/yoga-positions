import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { QuizContext } from '../../context/quizContext';
import YogaPosition from '../../components/yogaPosition';

const QuizItem = ({ position }) => (
  <QuizContext.Consumer>
    {languages => (
      <YogaPosition
        englishName={position.englishName}
        sanskritName={position.sanskritName}
        imageUrl={position.imageUrl}
        showEnglishName={!languages.english}
        showSanskritName={!languages.sanskrit}
      />
		)}
  </QuizContext.Consumer>
);

export default QuizItem;
