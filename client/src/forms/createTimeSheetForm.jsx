// Trong file createTimeSheetForm.jsx
import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useData } from "../context/previewTimeSheetContext";

function CreateTimeSheetForm() {
  const { sendDataToAPI } = useData();
  const [formData, setFormData] = useState({
    timesheetCode: "",
    timesheetName: "",
    createdByUserName: "",
    workDuration: "",
    workLocation: ""
  });
  const [submitting, setSubmitting] = useState(false); 

  const handleChange = (e, { name, value }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    setSubmitting(true); 
    try {
      await sendDataToAPI(formData);  
       setFormData({
        timesheetCode: "",
        timesheetName: "",
        createdByUserName: "",
        workDuration: "",
        workLocation: ""
      });
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
    setSubmitting(false); 
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Mã danh sách công việc</label>
          <input name="timesheetCode" value={formData.timesheetCode} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Công việc thường ngày</label>
          <input name="timesheetName" value={formData.timesheetName} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Người Tạo</label>
          <input name="createdByUserName" value={formData.createdByUserName} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Thời gian làm việc</label>
          <input name="workDuration" value={formData.workDuration} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Địa điểm làm việc</label>
          <input name="workLocation" value={formData.workLocation} onChange={handleChange} />
        </Form.Field>
        <Button type="submit">Gửi</Button>
      </Form>
    </div>
  );
}

export default CreateTimeSheetForm;
