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


export default App;
