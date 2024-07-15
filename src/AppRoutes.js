import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Landing from './pages/landing';
import Project from './pages/project';
import AboutUs from './pages/aboutUs';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing /> } />
      <Route path="/Project" element={<Project /> } />
      <Route path="/AboutUs" element={<AboutUs /> } />
    </Routes>
  )
}
