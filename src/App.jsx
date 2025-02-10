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
        <div className="schedule-section">
          {/* Weekly Schedule Component */}
          <WeeklySchedule />
        </div>

        <div className="attendance-section">
          {/* Attendance Log Component */}
          <AttendanceLog />
        </div>

        <div className="meeting-attendance-section">
          {/* Today's Dev Shop Zoom Meeting Attendance Component */}
          <ZoomMeetingAttendance />
        </div>

      </main>
    </div>
  );
}


export default App;
