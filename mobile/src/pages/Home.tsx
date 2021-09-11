import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Home: React.FC = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        style={{ width: 150, backgroundColor: '#069', padding: 10, borderRadius: 4 }}
        onPress={() => navigation.navigate('Catalog')}
      >
        <Text>Filmes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
