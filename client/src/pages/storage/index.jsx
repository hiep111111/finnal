import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PermisionComponet from '../../components/permisionComponet';
import ShowProductPage from './showProductPage';
import ShowExportProductPage from './showExportProductPage';
export const Storage = () => {
  return (
    <PermisionComponet>
      <BrowserRouter>
        <Routes>
          <Route path="/warehouse" element={<ShowProductPage />} />
          <Route path="/warehouse/warehouse" element={<ShowProductPage />} />
          <Route path="/warehouse/export-request" element={<ShowExportProductPage />} />
        </Routes>
      </BrowserRouter>
    </PermisionComponet>
  );
};