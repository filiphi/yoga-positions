import React from 'react';
import { View } from 'react-native';
import { Header, LargeText, NormalText, SmallText } from '../../../src/components/text';

const TextScreen = () => (
  <View>
    <Header>Header</Header>
    <LargeText>Large</LargeText>
    <NormalText>Normal</NormalText>
    <SmallText>Small</SmallText>
  </View>
);

export { TextScreen as default };
