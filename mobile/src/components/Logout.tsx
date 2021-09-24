import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { isAuthenticated, doLogout } from '../services/auth';
import { nav } from '../styles';

const Logout: React.FC = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useState(false);

  const logged = useCallback(async () => {
    const result = await isAuthenticated();

    result ? setAuthenticated(true) : setAuthenticated(false);
  }, []);

  function logout() {
    doLogout();
    setAuthenticated(false);
    navigation.navigate('Login');
  }

  useEffect(() => {
    logged();
  }, [logged]);

  return (
    <View>
      {authenticated && (
        <TouchableOpacity style={nav.logoutBtn} onPress={() => logout()}>
          <Text style={nav.logoutText}>Sair</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Logout;
