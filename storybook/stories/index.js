import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import YogaCard from './YogaCardScreen';
import TextScreen from './TextScreen';
import ButtonScreen from './ButtonScreen';
import StandardView from './StandardView';

storiesOf('YogaPosition', module)
  .addDecorator(getStory => <StandardView>{getStory()}</StandardView>)
  .add('full card', () => (
    <YogaCard
      position={{
				englishName: 'Crow pose',
				sanskritName: 'Kakasana',
				imageUrl: 'http://www.theyogaposes.com/images/p/yoga-crow-pose.jpg',
			}}
    />
  ))
  .add('no English', () => (
    <YogaCard
      position={{
				englishName: 'Crow pose',
				sanskritName: 'Kakasana',
				imageUrl: 'http://www.theyogaposes.com/images/p/yoga-crow-pose.jpg',
			}}
      showEnglishName={false}
    />
  ))
  .add('no Sanskrit card', () => (
    <YogaCard
      position={{
				englishName: 'Crow pose',
				sanskritName: 'Kakasana',
				imageUrl: 'http://www.theyogaposes.com/images/p/yoga-crow-pose.jpg',
			}}
      showSanskritName={false}
    />
  ));

storiesOf('Buttons', module)
  .addDecorator(getStory => <StandardView>{getStory()}</StandardView>)
  .add('types', () => <ButtonScreen />);

storiesOf('Text', module)
  .addDecorator(getStory => <StandardView>{getStory()}</StandardView>)
  .add('types', () => <TextScreen />);
