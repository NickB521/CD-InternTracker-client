import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, useParams } from "react-router-dom";
import { FaFilter } from "react-icons/fa"; 


const Performance = () => {
  const [assignments, setAssignments] = useState({});
  const [selectedWeek, setSelectedWeek] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    const savedAssignments = localStorage.getItem("assignments");
    if (savedAssignments) {
      setAssignments(JSON.parse(savedAssignments));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(assignments).length > 0) {
      localStorage.setItem("assignments", JSON.stringify(assignments));
    }
  }, [assignments]);

  const handleInputChange = (teamMember, date, value) => {
    setAssignments((prev) => {
      const updatedAssignments = {
        ...prev,
        [teamMember]: {
          ...(prev[teamMember] || {}),
          [date]: value,
        },
      };
      localStorage.setItem("assignments", JSON.stringify(updatedAssignments)); // Save immediately
      return updatedAssignments;
    });
  };

  const generateDates = () => {
    const startOfWeek = new Date(selectedWeek);
    const dayOfWeek = startOfWeek.getDay();
    
    startOfWeek.setDate(startOfWeek.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 2));

    return Array.from({ length: 6 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      return date.toISOString().split("T")[0];
    });
  };

  const teamMembers = [
    "John Doe",
    "Anne Joe",
    "Bri M",
    "Nick B",
    "Mark S",
  ];

  const dates = generateDates();

  const navigate = useNavigate();
  const { id } = useParams();

  const handleNavigation = () => {
    navigate(`/dashboard/${id}/studentcharts`);
  };


  return (
    <div className="schedule-container">
      <div className="header">
        <h1>Performance</h1>
        <div className="filter-container">
        <button className="filter-button" onClick={handleNavigation}>
        Team Progress
          </button>
          <button className="filter-button" onClick={() => setShowDatePicker((prev) => !prev)}>
          <FaFilter />  Filter by
          </button>
          {showDatePicker && (
            <div className="datepicker-container">
              <DatePicker
                selected={selectedWeek}
                onChange={(date) => {
                  setSelectedWeek(date);
                  setShowDatePicker(false);
                }}
                inline
                showWeekNumbers
              />
            </div>
          )}
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Team Member</th>
              {dates.map((date) => (
                <th key={date}>
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr key={member}>
                <td className="team-member">{member}</td>
                {dates.map((date) => (
                  <td key={date}>
                    <input
                      type="text"
                      value={(assignments[member] && assignments[member][date]) || ""}
                      onChange={(e) => handleInputChange(member, date, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Performance;
