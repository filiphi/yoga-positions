import React from 'react';
import { TabNavigator } from 'react-navigation';

import Listing from '../../views/listing';
import Quiz from '../../views/quiz';

const routes = {
  Listing: { screen: Listing },
  Quiz: { screen: Quiz },
};

export default TabNavigator(routes);
