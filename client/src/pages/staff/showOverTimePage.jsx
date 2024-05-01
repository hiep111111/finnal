import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/constants/sideBar.jsx"; // ko phải nghĩ
import NavBarContainer from "../../assets/constants/navBar.jsx"; // ko phải  tạo
import PreviewOverTimeForm from "../../forms/previewOverTimeForm.jsx";
import { DataProvider } from "../../context/previewOverTimeContext.js";

function ShowOverTimePage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <PreviewOverTimeForm></PreviewOverTimeForm>
      </DataProvider>
    </div>
  );
}

export default ShowOverTimePage;
