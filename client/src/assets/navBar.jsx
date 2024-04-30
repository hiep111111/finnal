import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { useAuth } from "../components/defaultComponet";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import './css/index.css'

function NavBarContainer() {
  const { Logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessTokennnnn");
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.isAdmin) {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    window.location.reload();
  };

  const handleLogout = () => {
    Logout();
  };

  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <Menu borderless inverted fluid fixed="top" color="teal">
          <Menu.Item>
            <div style={{ display: "inline-block", border: "1px solid white", borderRadius: "5px" }}>
              AKC SERVICE
            </div>
          </Menu.Item>
          <Menu.Menu position="left">
            <Menu.Item as="a">
              <span onClick={() => { handleNavigation("/staff/timeSheets"); }}>Nhân viên</span>
            </Menu.Item>
            <Menu.Item as="a">
              <span onClick={() => { handleNavigation("/warehouse"); }}>Kho hàng</span>
            </Menu.Item>
            <Menu.Item as="a">
              <span onClick={() => { handleNavigation("/accounting"); }}>Kế toán</span>
            </Menu.Item>
            <Menu.Item as="a">
              <span onClick={() => { handleNavigation("/kms"); }}>Tri Thức</span>
            </Menu.Item>
            {isAdmin && <Menu.Item as="a">
              <span onClick={() => { handleNavigation("/admin"); }}>Quản trị</span>
            </Menu.Item>}
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item as="a">
              <span onClick={() => { handleNavigation("/profile"); }}>Thông tin cá nhân</span>
            </Menu.Item>
            <Menu.Item onClick={() => handleLogout()}>Đăng xuất</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  );
}

export default NavBarContainer;
