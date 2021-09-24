import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Catalog, MovieDetails, Login } from '../pages';
import { colors } from '../styles';
import { HomeText, Logout } from '../components';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
