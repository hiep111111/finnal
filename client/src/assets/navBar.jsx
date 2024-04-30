import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { useAuth } from "../components/authComponet";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";

function NavBarContainer() {
  const { Logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Sử dụng hook useLocation để lấy thông tin về URL hiện tại

  useEffect(() => {
    const accessToken = localStorage.getItem("accessTokennnnn");
    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.isAdmin) {
        setIsAdmin(true);
      }
    }
  }, []);

  useEffect(() => {
    handleStatusLocation(); // Gọi hàm khi component được render và mỗi khi URL thay đổi
  }, [location.pathname]); // Sử dụng location.pathname làm dependency để gọi hàm mỗi khi URL thay đổi

  const handleLogout = () => {
    Logout();
  };

  const handleStatusLocation = () => {
    const url = window.location.pathname;
    const parts = url.split('/');
    const location = `/${parts[1]}`; 
    localStorage.setItem("isLocation", location);
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
              <span onClick={() => { navigate("/staff/timeSheets"); }}>Nhân viên</span>
            </Menu.Item>
            <Menu.Item as="a">
              <span onClick={() => { navigate("/warehouse"); }}>Kho hàng</span>
            </Menu.Item>
            <Menu.Item as="a">
              <span onClick={() => { navigate("/accounting"); }}>Kế toán</span>
            </Menu.Item>
            <Menu.Item as="a">
              <span onClick={() => { navigate("/kms"); }}>Tri Thức</span>
            </Menu.Item>
            {isAdmin && <Menu.Item as="a">
              <span onClick={() => { navigate("/admin"); }}>Quản trị</span>
            </Menu.Item>}
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item as="a">
              <span onClick={() => { navigate("/profile"); }}>Thông tin cá nhân</span>
            </Menu.Item>
            <Menu.Item onClick={() => handleLogout()}>Đăng xuất</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  );
}

export default NavBarContainer;
