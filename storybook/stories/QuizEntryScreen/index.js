import React from 'react';
import { StyleSheet } from 'react-native';

import QuizEntryView from '../../../src/views/quizEntry';
import { QuizContext, quizLanguages } from '../../../src/context/quizContext';
import Defaults from '../../../src/components/styleDefinitions';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Defaults.STANDARD_MARGIN_LARGE,
  },
});

class QuizEntryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: quizLanguages,
    };

    this.toggleLanguage = (language) => {
      this.setState((state) => {
        const newState = state.languages;
        newState[language] = !newState[language];
        return { languages: newState };
      });
    };
  }

  render() {
    return (
      <QuizContext.Provider value={this.state.languages}>
        <QuizEntryView toggleLanguage={this.toggleLanguage} />
      </QuizContext.Provider>
    );
  }
}

export { QuizEntryScreen as default };
