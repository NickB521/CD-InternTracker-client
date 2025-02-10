import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const AttendanceLog = () => {
  const [selectedWeek, setSelectedWeek] = useState("This Week");

  // Weekly attendance data
  const [weeklyAttendanceData, setWeeklyAttendanceData] = useState({
    "This Week": {
      Present: 1,
      Excused: 1,
      Late: 1,
      NoCallNoShow: 1,
    },
    "Last Week": {
      Present: 1,
      Excused: 1,
      Late: 1,
      NoCallNoShow: 1,
    },
  });

  
  const attendanceData = weeklyAttendanceData[selectedWeek];

  
  useEffect(() => {
    localStorage.setItem('weeklyAttendanceData', JSON.stringify(weeklyAttendanceData));
  }, [weeklyAttendanceData]);

  
  useEffect(() => {
    const savedData = localStorage.getItem('weeklyAttendanceData');
    if (savedData) {
      setWeeklyAttendanceData(JSON.parse(savedData));
    }
  }, []);

  const data = {
    labels: ['Present', 'Excused', 'Late', 'NoCallNoShow'],
    datasets: [
      {
        label: 'Attendance',
        data: Object.values(attendanceData),
        backgroundColor: ['#4caf50', '#ff9800', '#f44336', '#9e9e9e'],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  // Handle chart segment click to update attendance data
  const handleChartClick = (event, elements) => {
    if (elements.length > 0) {
      const clickedIndex = elements[0].index; // Get the index of the clicked segment
      const clickedLabel = data.labels[clickedIndex]; // Get the label of the clicked segment
      const newValue = parseInt(
        prompt(`Enter new count for ${clickedLabel}:`, attendanceData[clickedLabel])
      );

      if (!isNaN(newValue)) {
        setWeeklyAttendanceData((prevData) => ({
          ...prevData,
          [selectedWeek]: {
            ...prevData[selectedWeek],
            [clickedLabel]: newValue,
          },
        }));
      }
    }
  };

  return (
    <div className="attendance-log">
      <div className="header">
        <h3 className="font-bold text-blue-500">Attendance Log</h3>
        {/* Week Selector */}
        <div className="week-box">
          <select
            className="week-selector"
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
          >
            <option value="This Week">This Week</option>
            <option value="Last Week">Last Week</option>
          </select>
        </div>
      </div>
      <Pie
        data={data}
        options={{
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (tooltipItem) {
                  return `${tooltipItem.label}: ${tooltipItem.raw}`;
                },
              },
            },
          },
          onClick: (event, elements) => handleChartClick(event, elements),
        }}
      />
    </div>
  );
};

export default AttendanceLog;
