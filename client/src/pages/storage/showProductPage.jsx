import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/menuBar/sideBar.jsx"; // ko phải nghĩ
import NavBarContainer from "../../assets/menuBar/navBar.jsx"; // ko phải  tạo
import PreviewProductForm from "../../forms/previewProductForm.jsx"; /// phải Tạo
import { DataProvider } from "../../context/previewProductContext.js";

function ShowProductPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <PreviewProductForm></PreviewProductForm>
      </DataProvider>
    </div>
  );
}

export default ShowProductPage;
