import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import YogaPosition from '../../../src/components/yogaPosition';
import Defaults from '../../../src/components/styleDefinitions';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Defaults.STANDARD_MARGIN_LARGE,
  },
});

class YogaPositionScreen extends Component {
	defaultProps = {
	  showEnglishName: true,
	  showSanskritName: true,
	};
	propTypes = {
	  position: PropTypes.shape({
	    englishName: PropTypes.string,
	    sanskritName: PropTypes.string,
	    imageUrl: PropTypes.string,
	  }).isRequired,
	};

	constructor(props) {
	  super(props);
	  this.state = {
	    showEnglishName: props.showEnglishName,
	    showSanskritName: props.showSanskritName,
	  };
	}

	onPress = (showEnglishName, showSanskritName) => {
	  console.log('hello');
	  this.setState({
	    showEnglishName: true,
	    showSanskritName: true,
	  });
	};

	render() {
	  return (
  <View>
    <YogaPosition
      showEnglishName={this.state.showEnglishName}
      showSanskritName={this.state.showSanskritName}
      onPress={this.onPress}
      {...this.props.position}
    />
  </View>
	  );
	}
}

YogaPositionScreen.propTypes = {};

export { YogaPositionScreen as default };
