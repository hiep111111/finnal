import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/constants/sideBar.jsx"; // ko phải nghĩ
import NavBarContainer from "../../assets/constants/navBar.jsx"; // ko phải  tạo
import PreviewImportProductForm from "../../forms/previewImportProductForm.jsx";
import { DataProvider } from "../../context/previewImportProductContext.js";

function ShowImportProductPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <PreviewImportProductForm></PreviewImportProductForm>
      </DataProvider>
    </div>
  );
}

export default ShowImportProductPage;
