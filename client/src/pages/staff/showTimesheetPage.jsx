import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/constants/sideBar.jsx"; // ko phải nghĩ
import NavBarContainer from "../../assets/constants/navBar.jsx"; // ko phải  tạo
import PreviewTimeSheetForm from '../../forms/previewTimeSheetForm.jsx' /// phải Tạo
import { DataProvider } from "../../context/previewTimeSheetContext.js";

function ShowTimesheetPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <PreviewTimeSheetForm></PreviewTimeSheetForm>
      </DataProvider>
    </div>
  );
}

export default ShowTimesheetPage;
