import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Catalog, Home } from '../pages';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Catalog" component={Catalog} />
    </Stack.Navigator>
  );
};

export default Routes;
