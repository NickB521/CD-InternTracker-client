CDIT-Dashboard-View
import React from "react";
import WeeklySchedule from "./components/WeeklySchedule";
import AttendanceLog from "./components/AttendanceLog";
import ZoomMeetingAttendance from "./components/ZoomMeetingAttendance";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Weekly Schedule (Full Width) */}
        <div className="schedule-section">
          <WeeklySchedule />
        </div>

       {/* Attendance Log & Zoom Meeting Attendance Side by Side */}
        <div className="attendance-section">
          
          <AttendanceLog />
          <ZoomMeetingAttendance />
        </div>

      </main>
    </div>
  );
}


import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Performance from './components/Performance';

import RequestTest from './components/RequestTest';

import BarsDataset from './components/BarsData';
import Navbar from './components/Navbar';


function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<div>Login Content</div>} />
          <Route path="/dashboard/:id" element={<div>Dashboard Content</div>} />
          <Route path="/dashboard/:id/management" element={<div>Management Content</div>} />
          <Route path="/dashboard/:id/attendance" element={<div>Attendance Content</div>} />
          <Route path="/dashboard/:id/performance" element={<Performance />} />

          <Route path="/test/requests" element={<RequestTest/>} />

          <Route path="/dashboard/:id/studentcharts" element={<BarsDataset />} />

        </Routes>
      </BrowserRouter>
    </Container>
  );
}

dev
export default App;
