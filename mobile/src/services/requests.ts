import queryString from 'query-string';
import axios, { Method } from 'axios';
import { getSessionData } from './auth';

interface AuthProps {
  username: string;
  password: string;
}

type RequestParams = {
  method?: Method;
  url: string;
  data?: string;
  params?: { page: number; size: number };
  headers?: {
    Authorization: string;
  };
};

const BASE_URL = 'https://movieflix-robson.herokuapp.com';

export const api = axios.create({
  baseURL: BASE_URL
});

export const TOKEN = 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMzQ1Ng==';

export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {
  return axios({
    method,
    url: `${BASE_URL}${url}`,
    data,
    params,
    headers
  });
};

export const makePrivateRequest = async ({ method = 'GET', url, data, params }: RequestParams) => {
  const sessionData = await getSessionData();

  const headers = {
    Authorization: `Bearer ${sessionData.access_token}`
  };

  return makeRequest({ method, url, data, params, headers });
};

export async function login(userInfo: AuthProps) {
  const data = queryString.stringify({ ...userInfo, grant_type: 'password' });

  const result = await api.post('oauth/token', data, {
    headers: {
      Authorization: TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  return result;
}
