import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Pencil, Trash2, Filter } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AttendanceTable.css";

const attendanceOptions = [
  { value: "present", label: "Present & On-time" },
  { value: "excused", label: "Excused Absence" },
  { value: "late", label: "Late" },
  { value: "left_early", label: "Left Early" },
  { value: "no_show", label: "No Show/No Call" },
  { value: "unexcused", label: "Unexcused Absence" },
  { value: "not_scheduled", label: "Not Scheduled" },
  { value: "holiday", label: "Holiday/Cohort Off" },
  { value: "shift_added", label: "Shift Added" },
];

const employees = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", email: "olivia@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 2, name: "Phoenix Baker", username: "@phoenix", email: "phoenix@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 3, name: "Lana Steiner", username: "@lana", email: "lana@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 4, name: "Demi Wilkinson", username: "@demi", email: "demi@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 5, name: "Candice Wu", username: "@candice", email: "candice@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 6, name: "Natali Craig", username: "@natali", email: "natali@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 7, name: "Drew Cano", username: "@drew", email: "drew@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 8, name: "Orlando Diggs", username: "@orlando", email: "orlando@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 9, name: "Andi Lane", username: "@andi", email: "andi@untitledui.com", phone: "(302) 555 - 4444" },
  { id: 10, name: "Kate Morrison", username: "@kate", email: "kate@untitledui.com", phone: "(302) 555 - 4444" },
];

const AttendanceTable = () => {
  const [attendance, setAttendance] = useState(() => {
    return JSON.parse(localStorage.getItem("attendance")) || {};
  });
  const [notes, setNotes] = useState(() => {
    return JSON.parse(localStorage.getItem("notes")) || {};
  });
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [attendance, notes]);

  return (
    <div className="attendance-container">
      <div className="header">
        <h2 className="title">Students <span className="student-count">10 users</span></h2>
        <div className="header-actions">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="datepicker"
          />
          <button className="filter-button">
            <Filter size={18} /> Filter
          </button>
        </div>
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Attendance</th>
            <th>Schedule</th>
            <th>Email address</th>
            <th>Phone Number</th>
            <th>Student Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td><input type="checkbox" /></td>
              <td className="name-column">
                <img src="/avatar.png" alt="avatar" className="avatar" />
                <div>
                  {employee.name}
                  <span className="username">{employee.username}</span>
                </div>
              </td>
              <td className="attendance-column">
                <Select
                  options={attendanceOptions}
                  value={attendance[employee.id]}
                  onChange={(selected) => setAttendance({ ...attendance, [employee.id]: selected })}
                  className="attendance-select"
                  placeholder="Attendance"
                  isSearchable={false}
                  styles={{ border: "none", boxShadow: "none", background: "transparent" }}
                />
              </td>
              <td>Mon-Fri</td>
              <td><span className="email">{employee.email}</span></td>
              <td><a href={`mailto:${employee.phone}`} className="phone">{employee.phone}</a></td>
              <td>
                <input
                  type="text"
                  placeholder="notes.."
                  className="notes-input"
                  value={notes[employee.id] || ""}
                  onChange={(e) => setNotes({ ...notes, [employee.id]: e.target.value })}
                />
              </td>
              <td className="actions-column">
              <Trash2 className="icon delete-icon" size={18} />
              <Pencil className="icon edit-icon" size={18} />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-button">Previous</button>
        <span>1 2 3 ... 10</span>
        <button className="pagination-button">Next</button>
      </div>
    </div>
  );
};

export default AttendanceTable;
