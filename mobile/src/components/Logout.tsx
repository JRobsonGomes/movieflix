import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { nav } from '../styles';

const Logout: React.FC = () => {
  const { signOut } = useAuth();

  function handlerSignOut() {
    signOut();
  }

  return (
    <TouchableOpacity style={nav.logoutBtn} onPress={() => handlerSignOut()}>
      <Text style={nav.logoutText}>Sair</Text>
    </TouchableOpacity>
  );
};

export default Logout;
