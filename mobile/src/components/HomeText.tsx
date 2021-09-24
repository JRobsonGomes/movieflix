import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { nav } from '../styles';

const HomeText: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={nav.homeBtn} onPress={() => navigation.navigate('Catalog')}>
      <Text style={nav.leftText}>MovieFlix</Text>
    </TouchableOpacity>
  );
};

export default HomeText;
