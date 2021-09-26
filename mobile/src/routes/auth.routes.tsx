import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../pages';
import { HomeText } from '../components';
import { colors } from '../styles';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerTitle: '',
      headerStyle: {
        backgroundColor: colors.warning,
        height: 100
      },
      headerLeft: () => <HomeText />
    }}
  >
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
