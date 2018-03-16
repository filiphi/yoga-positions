import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TextScreen from './TextScreen';
import ButtonScreen from './ButtonScreen';
import StandardView from './StandardView';

storiesOf('Buttons', module)
  .addDecorator(getStory => <StandardView>{getStory()}</StandardView>)
  .add('types', () => <ButtonScreen />);

storiesOf('Text', module)
  .addDecorator(getStory => <StandardView>{getStory()}</StandardView>)
  .add('types', () => <TextScreen />);
