import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/sideBar.jsx"; // ko phải nghĩ
import NavBarContainer from "../../assets/navBar.jsx"; // ko phải  tạo
import CreateTimeSheetForm from "../../forms/createTimeSheetForm.jsx";
import { DataProvider } from "../../context/previewTimeSheetContext.js"; // phải Tạo

function CreateTimesheetPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <CreateTimeSheetForm></CreateTimeSheetForm>
      </DataProvider>
    </div>
  );
}

export default CreateTimesheetPage;
