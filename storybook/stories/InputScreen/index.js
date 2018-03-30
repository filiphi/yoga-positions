import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import Input from '../../../src/components/textInput';
import Defaults from '../../../src/components/styleDefinitions';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Defaults.STANDARD_MARGIN_LARGE,
  },
});

class InputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

	onChangeText = (text) => {
	  this.setState({
	    input: text,
	  });
	};

	render() {
	  return (
  <View>
    <Input onChangeText={this.onChangeText} value={this.state.input} />
  </View>
	  );
	}
}

export { InputScreen as default };
