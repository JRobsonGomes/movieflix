import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://movieflix-robson.herokuapp.com'
});

export const TOKEN = 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMzQ1Ng==';

export async function userToken() {
  const token = await AsyncStorage.getItem('@token');
  return token;
}

export async function getMovies() {
  const authToken = await userToken();
  const res = api.get(`/movies`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });
  return res;
}
