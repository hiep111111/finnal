import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowTimesheetPage from './showTimesheetPage';
import PermisionComponet from '../../components/permisionComponent';
import ShowKpiPerStaffPage from './showKpiPerStaffPage';
import ShowLeaveSlipPage from './showLeaveSlipPage';
import ShowOverTimePage from './showOverTimePage';
import ShowPaymentRequisitionPage from './showPaymentRequisitionPage';
import CreateTimeSheetPage from './createTimeSheetPage';
export const Staff = () => {
  return (
    <PermisionComponet>
    <BrowserRouter>
      <Routes>
        <Route path="/staff/timeSheets" element={<ShowTimesheetPage />} />
        <Route path="/staff/timeSheets/0" element={<CreateTimeSheetPage />} />
        <Route path="/staff/personalKPIReports" element={<ShowKpiPerStaffPage />} />
        <Route path="/staff/leaveSlips" element={<ShowLeaveSlipPage />} />
        <Route path="/staff/overtimes" element={<ShowOverTimePage />} />
        <Route path="/staff/paymentRequisitions" element={<ShowPaymentRequisitionPage />} />
      </Routes>
    </BrowserRouter>
    </PermisionComponet>
  );
};