import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Defaults from '../../components/styleDefinitions';
import { QuizContext } from '../../context/quizContext';
import { HeroButton } from '../../components/buttons';
import { LargeText } from '../../components/text';
import SwitchLabel from '../../components/switch';

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
  title: {
    marginBottom: Defaults.STANDARD_MARGIN_LARGE,
  },
});

const QuizEntry = ({ toggleLanguage }) => {
  const toggleEnglish = () => {
    toggleLanguage('english');
  };
  const toggleSanskrit = () => {
    toggleLanguage('sanskrit');
  };
  return (
    <SafeAreaView style={styles.container}>
      <LargeText style={styles.title}>Which languages do you want to test?</LargeText>
      <QuizContext.Consumer>
        {theme => (
          <View>
            <SwitchLabel label="English" value={theme.english} onValueChange={toggleEnglish} />
            <SwitchLabel label="Sanskrit" value={theme.sanskrit} onValueChange={toggleSanskrit} />
          </View>
				)}
      </QuizContext.Consumer>
      <HeroButton
        style={styles.margin}
        onPress={() => {
					console.log('in hre');
				}}
      >
				Start
      </HeroButton>
    </SafeAreaView>
  );
};

QuizEntry.propTypes = {
  toggleLanguage: PropTypes.func.isRequired,
};

export default QuizEntry;
