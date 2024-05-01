import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth } from './pages/auth';
import { AuthProvider } from './components/defaultComponet';
import { Staff } from './pages/staff';
import { Storage } from './pages/storage';
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Auth />
      <Staff />
      <Storage />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

