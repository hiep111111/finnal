import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowTimesheetPage from './showTimesheetPage';
import PermisionComponet from '../../components/permisionComponet';
import ShowKpiPerStaffPage from './showKpiPerStaffPage';
export const Staff = () => {
  return (
    <PermisionComponet>
    <BrowserRouter>
      <Routes>
        <Route path="/staff/timeSheets" element={<ShowTimesheetPage />} />
        <Route path="/staff/personalKPIReports" element={<ShowKpiPerStaffPage />} />
      </Routes>
    </BrowserRouter>
    </PermisionComponet>
  );
};