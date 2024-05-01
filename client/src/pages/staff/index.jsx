import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowTimesheetPage from './showTimesheetPage';
import PermisionComponet from '../../components/permisionComponet';
import ShowKpiPerStaffPage from './showKpiPerStaffPage';
import ShowLeaveSlipPage from './showKpiPerStaffPage';
import ShowOverTimePage from './showOverTimePage';
import ShowPaymentRequisitionPage from './showPaymentRequisitionPage';

export const Staff = () => {
  return (
    <PermisionComponet>
    <BrowserRouter>
      <Routes>
        <Route path="/staff/timeSheets" element={<ShowTimesheetPage />} />
        <Route path="/staff/personalKPIReports" element={<ShowKpiPerStaffPage />} />
        <Route path="/staff/leaveSlips" element={<ShowLeaveSlipPage />} />
        <Route path="/staff/overtimes" element={<ShowOverTimePage />} />
        <Route path="/staff/paymentRequisitions" element={<ShowPaymentRequisitionPage />} />
      </Routes>
    </BrowserRouter>
    </PermisionComponet>
  );
};