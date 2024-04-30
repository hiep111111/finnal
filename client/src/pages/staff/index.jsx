import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowTimesheetPage from './showTimesheetPage';
import PermisionComponet from '../../components/permisionComponet';
export const Staff = () => {
  return (
    <PermisionComponet>
    <BrowserRouter>
      <Routes>
        <Route path="/staff/timeSheets" element={<ShowTimesheetPage />} />
      </Routes>
    </BrowserRouter>
    </PermisionComponet>
  );
};