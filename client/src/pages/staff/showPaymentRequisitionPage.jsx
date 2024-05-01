import React from "react";
import "semantic-ui-css/semantic.min.css";
import SideBarContainer from "../../assets/constants/sideBar.jsx"; // ko phải tạo
import NavBarContainer from "../../assets/constants/navBar.jsx"; // ko phải  tạo
import PreviewPaymentRequisitionForm from "../../forms/previewPaymentRequisitionForm.jsx";
import { DataProvider } from "../../context/previewPaymentRequisitionContext.js";

function ShowPaymentRequisitionPage() {
  return (
    <div className="App">
      <NavBarContainer></NavBarContainer>
      <SideBarContainer></SideBarContainer>
      <DataProvider>
        <PreviewPaymentRequisitionForm></PreviewPaymentRequisitionForm>
      </DataProvider>
    </div>
  );
}

export default ShowPaymentRequisitionPage;
