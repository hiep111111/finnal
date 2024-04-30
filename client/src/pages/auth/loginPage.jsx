import React, { useState, useEffect } from "react";
import "../css/App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../components/defaultComponet';

const LoginPage = () => {
  const { login, isLoggedIn } = useAuth(); // Giả sử useAuth cung cấp hàm login và isLoggedIn
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/staff/timeSheets");
      window.location.reload()
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(userName, passWord);
      navigate("/staff/timeSheets");
      window.location.reload()
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
