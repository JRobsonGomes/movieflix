import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Catalog } from '../pages';
import Login from '../pages/Login';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Catalog" component={Catalog} />
    </Stack.Navigator>
  );
};

export default Routes;
