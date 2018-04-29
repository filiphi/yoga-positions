import React from 'react';
import { View, StyleSheet } from 'react-native';

import SwitchLabel from '../../../src/components/switch';
import Defaults from '../../../src/components/styleDefinitions';

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: Defaults.STANDARD_MARGIN_LARGE,
  },
});

class SwitchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
  }

  render() {
    return (
      <View>
        <SwitchLabel
          label="English"
          value={this.state.value}
          onValueChange={() => {
						this.setState({
							value: !this.state.value,
						});
					}}
        />
      </View>
    );
  }
}

export { SwitchScreen as default };
