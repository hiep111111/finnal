import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { useAuth } from "../../components/defaultComponet";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import '../css/index.css'

function NavBarContainer() {
  const { Logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const [state, setState] = useState(1);

  useEffect(() => {
    const isLocation = localStorage.getItem("typeModule");
    setState(getStatesByLocation(isLocation));
  }, []);

  const getStatesByLocation = (location) => {
    switch (location) {
      case "staff":
        return 1;
      case "warehouse":
        return 2;
      case "accounting":
        return 3;
      case "admin":
        return 4;
      case "kms":
        return 5;
      default:
        return 6;
    }
  }

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
    <div className="nav-bar-container" >
      <div className="nav-bar">
        <Menu borderless inverted fluid fixed="top" color="teal">
          <Menu.Item>
            <div style={{ display: "inline-block", border: "1px solid white", borderRadius: "5px" }}>
                <span onClick={() => { handleNavigation("/staff/timeSheets"); }}>AKC SERVICE</span>
            </div>
          </Menu.Item>
          <div className="nav-bar-content">
            <Menu.Menu position="left">
              <div className={state === 1 ? 'active-item' : ''}>
                <Menu.Item as="a" >
                  <span onClick={() => { handleNavigation("/staff/timeSheets"); }}>Nhân viên</span>
                </Menu.Item>
              </div>
              <div className={state === 2 ? 'active-item' : ''}>
                <Menu.Item as="a" className={state === 2 ? 'active-item' : ''}>
                  <span onClick={() => { handleNavigation("/warehouse"); }}>Kho hàng</span>
                </Menu.Item>
              </div>
              <div className={state === 3 ? 'active-item' : ''}>
                <Menu.Item as="a">
                  <span onClick={() => { handleNavigation("/accounting"); }}>Kế toán</span>
                </Menu.Item>
              </div>
              <div className={state === 4 ? 'active-item' : ''}>
                <Menu.Item as="a">
                  <span onClick={() => { handleNavigation("/kms"); }}>Tri Thức</span>
                </Menu.Item>
              </div>
              <div className={state === 5 ? 'active-item' : ''}>
                {isAdmin && (
                  <Menu.Item as="a" className={state === 4 ? 'active-item' : ''}>
                    <span onClick={() => { handleNavigation("/admin"); }}>Quản trị</span>
                  </Menu.Item>
                )}
              </div>
            </Menu.Menu>
          </div>
          <Menu.Menu position="right">
            <div className={state === 6 ? 'active-item' : ''}>
              <Menu.Item as="a">
                <span onClick={() => { handleNavigation("/profile"); }}>Thông tin cá nhân</span>
              </Menu.Item>
            </div>
            <Menu.Item onClick={() => handleLogout()}>Đăng xuất</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  );
}

export default NavBarContainer;

