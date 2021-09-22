import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import eyesOpened from '../assets/eyes-opened.png';
import eyesClosed from '../assets/eyes-closed.png';
import { text, theme } from '../styles';
import { saveSessionData } from '../services/auth';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/requests';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: ''
  });

  async function handlerLogin() {
    login(userInfo).then((res) => {
      saveSessionData(res.data);
      navigation.navigate('Catalog');
    });
  }

  return (
    <View style={theme.container}>
      <View style={theme.loginCard}>
        <Text style={text.loginTitle}>Login</Text>
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          style={theme.textInput}
          value={userInfo.username}
          onChangeText={(e) => {
            const newUserInfo = { ...userInfo };
            newUserInfo.username = e;
            setUserInfo(newUserInfo);
          }}
        />

        <View style={theme.passwordGroup}>
          <TextInput
            placeholder="Senha"
            autoCapitalize="none"
            style={theme.textInput}
            value={userInfo.password}
            secureTextEntry={hidePassword}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.password = e;
              setUserInfo(newUserInfo);
            }}
          />
          <TouchableOpacity style={theme.toggler} onPress={() => setHidePassword(!hidePassword)}>
            <Image source={hidePassword ? eyesClosed : eyesOpened} style={theme.eyes} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={theme.primaryButton}
          onPress={() => handlerLogin()}
        >
          <View>
            <Text style={text.primaryText}>Fazer Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
