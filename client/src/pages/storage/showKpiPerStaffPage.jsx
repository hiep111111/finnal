import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/constants/sideBar.jsx"; // ko phải tạo
import NavBarContainer from "../../assets/constants/navBar.jsx"; // ko phải  tạo
import PreviewLeaveSlipForm from "../../forms/previewLeaveSlipForm.jsx";
import { DataProvider } from "../../context/previewLeaveSlipContext.js";

function ShowLeaveSlipPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <PreviewLeaveSlipForm></PreviewLeaveSlipForm>
      </DataProvider>
    </div>
  );
}

export default ShowLeaveSlipPage;
