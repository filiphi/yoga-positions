import React from 'react';
import { TabNavigator } from 'react-navigation';

import HomeScreen from '../../views/home';

const routes = {
  Home: { screen: HomeScreen },
};

export default TabNavigator(routes);
