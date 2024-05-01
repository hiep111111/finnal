import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PermisionComponet from '../../components/permisionComponet';
import ShowProductPage from './showProductPage';
import ShowExportProductPage from './showExportProductPage';
import ShowImportProductPage from './showImportProductPage';

export const Storage = () => {
  return (
    <PermisionComponet>
      <BrowserRouter>
        <Routes>
          <Route path="/warehouse" element={<ShowProductPage />} />
          <Route path="/warehouse/warehouse" element={<ShowProductPage />} />
          <Route path="/warehouse/export-request" element={<ShowExportProductPage />} />
          <Route path="/warehouse/import-request" element={<ShowImportProductPage />} />

        </Routes>
      </BrowserRouter>
    </PermisionComponet>
  );
};