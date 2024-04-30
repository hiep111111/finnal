import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/sideBar.jsx";
import ContentFollowContainer from "../../assets/formFollow.jsx";
import NavBarContainer from "../../assets/navBar.jsx";

function Dashboard() {

  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <ContentFollowContainer></ContentFollowContainer>
    </div>
  );
}

export default Dashboard;
