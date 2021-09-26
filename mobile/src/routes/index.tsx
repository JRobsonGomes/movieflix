import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { colors, theme } from '../styles';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={theme.loadContainer}>
        <ActivityIndicator size="large" color={colors.warning} />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
