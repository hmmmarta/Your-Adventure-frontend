import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import * as KeyChain from "react-native-keychain";

const AuthContext = createContext(null);

// TODO: add API_URL
const API_URL = "";

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    authenticated: boolean | null;
    refreshToken: string | null;
    accessToken: string | null;
  }>({
    authenticated: false,
    accessToken: null,
    refreshToken: null,
  });

  // TODO: add bcrypt for password
  const register = async (email: string, password: string) => {
    try {
      // TODO: change api end point
      console.log("Registered");
      setAuthState({
        accessToken: "",
        refreshToken: "",
        authenticated: true,
      });
      console.log(authState);
      // return await axios.post(`${API_URL}/users`, { email, password });
    } catch (err) {
      console.error(err);
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_URL}/auth`, { email, password });
      const { accessToken, refreshToken } = result.data;
      setAuthState({
        accessToken,
        refreshToken,
        authenticated: true,
      });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;

      await KeyChain.setGenericPassword(
        "token",
        JSON.stringify({ accessToken, refreshToken })
      );
      return result;
    } catch (err) {
      console.error("Login failed", err);
    }
  };
  const logout = async () => {
    await KeyChain.resetGenericPassword();
    setAuthState({
      authenticated: false,
      refreshToken: null,
      accessToken: null,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogOut: logout,
    authState,
    setAuthState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
