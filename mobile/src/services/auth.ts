import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecoded from 'jwt-decode';

export type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userName: string;
  userId: number;
};

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export async function saveSessionData(loginResponse: LoginResponse) {
  try {
    await AsyncStorage.setItem('@authData', JSON.stringify(loginResponse));
  } catch (e) {
    console.warn(e);
  }
}

export async function getSessionData() {
  const sessionData = (await AsyncStorage.getItem('@authData')) ?? '{}';
  const parsedSessionData = JSON.parse(sessionData);

  return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = async () => {
  const sessionData = await getSessionData();

  try {
    const tokenDecoded = jwtDecoded(sessionData.access_token);
    return tokenDecoded as AccessToken;
  } catch (error) {
    return {} as AccessToken;
  }
};

export const isTokenValid = async () => {
  const { exp } = await getAccessTokenDecoded();

  return Date.now() <= exp * 1000;
};

export const isAuthenticated = async () => {
  const sessionData = await getSessionData();

  return sessionData.access_token && isTokenValid();
};

export const isAllowedByRole = async (routeRoles: Role[] = []) => {
  if (routeRoles.length === 0) {
    return true;
  }
  const { authorities } = await getAccessTokenDecoded();

  return routeRoles.some((role) => authorities?.includes(role));
};

export async function doLogout() {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.warn(e);
  }
}
