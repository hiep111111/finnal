import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/constants/sideBar.jsx"; // ko phải nghĩ
import NavBarContainer from "../../assets/constants/navBar.jsx"; // ko phải  tạo
import PreviewExportProductForm from "../../forms/previewExportProductForm.jsx";
import { DataProvider } from "../../context/previewExportProductContext.js";

function ShowExportProductPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <PreviewExportProductForm></PreviewExportProductForm>
      </DataProvider>
    </div>
  );
}

export default ShowExportProductPage;
