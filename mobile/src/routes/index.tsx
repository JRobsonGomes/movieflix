import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Catalog, MovieDetails, Login } from '../pages';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
