import React, { createContext, useContext, useEffect, useState } from 'react';
import { api, login } from '../services/requests';
import { doLogout, getSessionData, isAuthenticated, saveSessionData } from '../services/auth';

interface User {
  username: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  userName: string | null;
  loading: boolean;
  signIn(user: User): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// eslint-disable-next-line react/prop-types
const AuthProvider: React.FC = ({ children }) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const authenticated = await isAuthenticated();

      if (authenticated) {
        const sessionData = await getSessionData();
        setUserName(sessionData.userName);
        api.defaults.headers.Authorization = `Bearer ${sessionData.access_token}`;
      }

      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(userInfo: User) {
    const response = await login(userInfo);
    setUserName(response.data.userName);
    saveSessionData(response.data);

    api.defaults.headers.Authorization = `Bearer ${response.headers.Authorization}`;
  }

  async function signOut() {
    doLogout();
    setUserName(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!userName, userName, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('UseAuth deve ser usado dentro de um AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
