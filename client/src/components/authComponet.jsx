import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [language, setLanguage] = useState('vi');

  const login = async (userName, passWord) => {
    try {
      const userData = { userName, passWord };
      const res = await axios.post(
        "http://localhost:1234/api/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("user", res.data.userName);
      localStorage.setItem("accessTokennnnn", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
    } catch (err) {
      throw new Error("Username or password incorrect!");
    }
  };


  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("accessTokennnnn");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
