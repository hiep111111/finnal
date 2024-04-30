import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowTimesheetPage from './showTimesheetPage';

export const Staff = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/staff/timeSheets" element={<ShowTimesheetPage />} />
      </Routes>
    </BrowserRouter>
  );
};