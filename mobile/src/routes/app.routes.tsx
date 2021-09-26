import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Catalog, MovieDetails } from '../pages';
import { colors } from '../styles';
import { HomeText, Logout } from '../components';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    screenOptions={{
      headerTitle: '',
      headerStyle: {
        backgroundColor: colors.warning,
        height: 100
      },
      headerLeft: () => <HomeText />,
      headerRight: () => <Logout />
    }}
  >
    <AppStack.Screen name="Catalog" component={Catalog} />
    <AppStack.Screen name="MovieDetails" component={MovieDetails} />
  </AppStack.Navigator>
);

export default AppRoutes;
