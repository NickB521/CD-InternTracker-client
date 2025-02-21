import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Pencil, Trash2, Filter } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AttendanceTable.css";



const employees = [
  { id: 1, name: "Olivia Rhye", username: "@olivia", email: "olivia@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "12", late: "0", excusedAbsences: "2", noCallNoShow: "0" },
  { id: 2, name: "Phoenix Baker", username: "@phoenix", email: "phoenix@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "24", late: "0", excusedAbsences: "0", noCallNoShow: "0" },
  { id: 3, name: "Lana Steiner", username: "@lana", email: "lana@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "24", late: "1", excusedAbsences: "0", noCallNoShow: "1" },
  { id: 4, name: "Demi Wilkinson", username: "@demi", email: "demi@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "20", late: "0", excusedAbsences: "1", noCallNoShow: "0" },
  { id: 5, name: "Candice Wu", username: "@candice", email: "candice@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "18", late: "0", excusedAbsences: "0", noCallNoShow: "0" },
  { id: 6, name: "Natali Craig", username: "@natali", email: "natali@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "23", late: "0", excusedAbsences: "0", noCallNoShow: "0" },
  { id: 7, name: "Drew Cano", username: "@drew", email: "drew@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "15", late: "1", excusedAbsences: "0", noCallNoShow: "2" },
  { id: 8, name: "Orlando Diggs", username: "@orlando", email: "orlando@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "10", late: "0", excusedAbsences: "3", noCallNoShow: "0" },
  { id: 9, name: "Andi Lane", username: "@andi", email: "andi@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "17", late: "2", excusedAbsences: "0", noCallNoShow: "0" },
  { id: 10, name: "Kate Morrison", username: "@kate", email: "kate@untitledui.com", phone: "(302) 555 - 4444", totalPresent: "20", late: "0", excusedAbsences: "0", noCallNoShow: "0" },
];

const AttendanceTable = () => {


  const [selectedDate, setSelectedDate] = useState(new Date());


  return (
    <div className="outer">


    <h1> Attendance </h1> 
    <div className="attendance-container">
      
      <div className="header">
        <div className="headerTOP">
          <h2 className="title">Team Members <span className="student-count">100 users</span></h2>
          <button> Download Report </button>
        </div>
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th id="headerName">Name</th>
            <th>Total Present</th>
            <th>Late</th>
            <th>Excused Absences</th>
            <th>NO Call/No Show</th>
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
              <td><span className="email">{employee.totalPresent}</span></td>
              <td><span className="email">{employee.late}</span></td>
              <td><span className="email">{employee.excusedAbsences}</span></td>
              <td><span className="email">{employee.noCallNoShow}</span></td>

            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-button">← Previous</button>
        <span>1 2 3 ... 10</span>
        <button className="pagination-button">Next →</button>
      </div>
    </div>

    </div>
  );
};

export default AttendanceTable;
