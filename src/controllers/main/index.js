import React from 'react';
import { TabNavigator } from 'react-navigation';

import Defaults from '../../components/styleDefinitions';
import Listing from '../../views/listing';
import Quiz from '../quiz';

const routes = {
  Listing: { screen: Listing },
  Quiz: { screen: Quiz },
};

export default TabNavigator(routes, {
  tabBarOptions: {
    activeTintColor: Defaults.PRIMARY_COLOR,
    style: {
      borderTopWidth: 4,
      borderTopColor: Defaults.PRIMARY_COLOR,
      backgroundColor: 'white',
    },
    labelStyle: {
      fontSize: Defaults.MEDIUM,
    },
  },
});
