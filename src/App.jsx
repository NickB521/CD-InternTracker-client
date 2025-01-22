import React from "react";
import WeeklySchedule from "./components/WeeklySchedule";
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

      </main>
    </div>
  );
}


export default App;
