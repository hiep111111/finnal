import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/sideBar.jsx";
import ContentFollowContainer from "../../assets/previewForm.jsx";
import NavBarContainer from "../../assets/navBar.jsx";
function ShowTimesheetPage() {

  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <ContentFollowContainer></ContentFollowContainer>
    </div>
  );
}

export default ShowTimesheetPage;
