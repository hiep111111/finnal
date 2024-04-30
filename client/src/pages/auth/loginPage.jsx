import React, { useState } from "react";
import "../css/App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../components/authComponet';

const LoginPage = () => {
  const { login } = useAuth();
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (isLoggedIn) {
      navigate("/staff/timeSheets");
    }
    try {
      await login(userName, passWord);
      navigate("/staff/timeSheets");
    } catch (error) {
      setError("Username or password incorrect!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleLogin}>
          <span className="formTitle">Login</span>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submitButton" disabled={isLoading}>
            <span className="buttonContent">
              {isLoading && <div className="loader"></div>}
              {!isLoading && 'Login'}
            </span>
          </button>
          {error && <span className="error">{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
