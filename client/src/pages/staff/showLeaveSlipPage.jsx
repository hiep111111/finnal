import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/menuBar/sideBar.jsx";
import NavBarContainer from "../../assets/menuBar/navBar.jsx"; // ko phải  tạo
import PreviewKpiPerStaffForm from "../../forms/previewKpiPerStaffForm.jsx";
import { DataProvider } from "../../context/previewKpiPerStaffContext.js";

function ShowLeaveSlipPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <PreviewKpiPerStaffForm></PreviewKpiPerStaffForm>
      </DataProvider>
    </div>
  );
}

export default ShowLeaveSlipPage;
