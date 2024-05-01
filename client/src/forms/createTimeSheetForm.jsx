import React, { useState, useEffect } from "react";
import { Divider, Grid, Table } from "semantic-ui-react";
import '../assets/css/index.css'
import { AddingButton, SeachingButton, RefreshButton } from "../assets/constants/button";
import SideBarContainer from "../assets/constants/sideBar";
import NavBarContainer from "../assets/constants/navBar";

function CreateTimeSheetForm() {
  // Khởi tạo state để lưu trữ giá trị của các trường input
  const [formData, setFormData] = useState({
    timesheetCode: "",
    timesheetName: "",
    createdByUserName: "",
    workDuration: "",
    workLocation: ""
  });

  useEffect(() => {
    generateTimesheetData();
  }, []); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:1235/api/timeSheet/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log("Data submitted successfully!");
      } else {
        console.error("Failed to submit data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  // Hàm tạo mã và tên danh sách công việc dựa trên ngày hiện tại
  const generateTimesheetData = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0"); // Lấy ngày và thêm số 0 đằng trước nếu cần
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Lấy tháng và thêm số 0 đằng trước nếu cần
    const year = currentDate.getFullYear().toString().substr(-2); // Lấy hai chữ số cuối của năm
    const formattedDate = `${day}${month}${year}`; // Định dạng ngày tháng
    const timesheetCode = `CVTN-${formattedDate}`; // Tạo mã danh sách công việc
    const timesheetName = `CVTN-${formattedDate} của aa`; // Tạo tên danh sách công việc
    const user = localStorage.getItem("user"); // Lấy giá trị user từ localStorage
    setFormData({
      ...formData,
      timesheetCode: timesheetCode,
      timesheetName: timesheetName,
      createdByUserName: user
    });
  };

  return (
    <div>
      <div className="content-container">
        <div className="content-content">
          <Grid padded>
            <div className="ui form">
              <div className="two fields">
                <div className="field">
                  <label>Mã danh sách công việc</label>
                  <input 
                    placeholder="Timesheet Code" 
                    type="text" 
                    name="timesheetCode" 
                    value={formData.timesheetCode} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="field">
                  <label>Tên danh sách công việc</label>
                  <input 
                    placeholder="Timesheet Name" 
                    type="text" 
                    name="timesheetName" 
                    value={formData.timesheetName} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="field">
                  <label>Người tạo</label>
                  <input 
                    placeholder="Created By User Name" 
                    type="text" 
                    name="createdByUserName" 
                    value={formData.createdByUserName} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="field">
                  <label>Thời gian làm việc</label>
                  <input 
                    placeholder="Work Duration" 
                    type="text" 
                    name="workDuration" 
                    value={formData.workDuration} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="field">
                  <label>Địa điểm làm việc</label>
                  <input 
                    placeholder="Work Location" 
                    type="text" 
                    name="workLocation" 
                    value={formData.workLocation} 
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="ui submit button" onClick={handleSubmit}>Submit</div>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default CreateTimeSheetForm;
