import React, { useState, useEffect } from "react";
import "../css/App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../components/defaultComponet';
import background from '../css/background.jpg';

const LoginPage = () => {
  const { login, isLoggedIn } = useAuth();
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/staff/timeSheets");
      window.location.reload();
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(userName, passWord);
      navigate("/staff/timeSheets");
      window.location.reload();
    } catch (error) {
      setError("Vui lòng nhập mật khẩu đúng");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="form-Login">
        <div className="login">
          <form onSubmit={handleLogin}>
            <div className="formTitle">
              <div style={{ fontSize: '250%',margin: 'center', fontWeight: 'bold' }}>
                AKC SERVICE
              </div>
            </div>
            <div style={{ marginLeft: '-50px', marginTop: '-50px' }}>
              <input
                style={{
                  marginLeft: '50px',
                  fontSize: '13px',
                  width: '250px'
                }}
                type="text"
                placeholder="Tên đăng nhập"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i className="user icon" ></i>
            </div>
            <div style={{ marginLeft: '-50px', marginTop: '-50px' }}>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  marginLeft: '50px',
                  fontSize: '13px',
                  width: '250px'
                }}
              />
              <i className="lock icon" ></i>
            </div>
            <button type="submit" className="submitButton" disabled={isLoading} style={{ fontWeight: 'bold' }}>
              <span className="buttonContent" >
                {isLoading && <div className="loader"></div>}
                {!isLoading && 'Đăng nhập'}
              </span>
            </button>
            {error && <span className="error">{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
