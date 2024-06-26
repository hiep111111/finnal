import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/menuBar/sideBar.jsx"; // ko phải nghĩ
import NavBarContainer from "../../assets/menuBar/navBar.jsx"; // ko phải  tạo
import CreateTimeSheetForm from "../../forms/createTimeSheetForm.jsx";

function CreateTimeSheetPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <CreateTimeSheetForm></CreateTimeSheetForm>
    </div>
  );
}

export default CreateTimeSheetPage;
