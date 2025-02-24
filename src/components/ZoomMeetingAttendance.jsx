import React, { useState, useEffect } from "react";


const ZoomMeetingAttendance = () => {
  const localStorageKey = "zoomAttendanceData";

  // Initial participant data
  const initialParticipants = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Participant ${i + 1}`,
    username: `@participant${i + 1}`,
    attendance: "Present & On-time",
    selected: false,
  }));

  const [participants, setParticipants] = useState(() => {
    const storedData = localStorage.getItem(localStorageKey);
    return storedData ? JSON.parse(storedData) : initialParticipants;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [internCount, setInternCount] = useState(100);
  const [filterOption, setFilterOption] = useState("");
  


  // Save attendance data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(participants));
  }, [participants]);

  const handleInternCountChange = () => {
    const newCount = prompt("Enter new number of interns:", internCount);
    if (!isNaN(newCount) && newCount > 0) {
      setInternCount(newCount);
    }
  };

  const handleAddParticipant = () => {
    const name = prompt("Enter participant name:");
    const username = prompt("Enter participant username:");
    if (name && username) {
      setParticipants((prevParticipants) => [
        ...prevParticipants,
        {
          id: prevParticipants.length + 1,
          name,
          username: `@${username}`,
          attendance: "Present & On-time",
          selected: false,
        },
      ]);
    }
  };

   // Handle search input
   const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter selection
  const handleFilterSelection = (event) => {
    setFilterOption(event.target.value);
  };

 

  // Filtered list of participants 
  const filteredParticipants = participants.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Select All Checkboxes
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant) => ({ ...participant, selected: !selectAll }))
    );
  };

  // Select Single Checkbox
  const handleSelectOne = (id) => {
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant) =>
        participant.id === id ? { ...participant, selected: !participant.selected } : participant
      )
    );
  };

  const handleAttendanceChange = (id, event) => {
    const newAttendance = event.target.value;
    setParticipants((prevParticipants) =>
      prevParticipants.map((participant) =>
        participant.id === id ? { ...participant, attendance: newAttendance } : participant
      )
    );
  };
  

  // Delete Participant
  const handleDelete = (id) => {
    setParticipants((prevParticipants) => prevParticipants.filter((p) => p.id !== id));
  };

  // Edit Participant
  const handleEdit = (id) => {
    const name = prompt("Enter new name:");
    const username = prompt("Enter new username:");
    if (name && username) {
      setParticipants((prevParticipants) =>
        prevParticipants.map((p) =>
          p.id === id ? { ...p, name, username: `@${username}` } : p
        )
      );
    }
  };



  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredParticipants.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate & Download CSV Report
  const downloadReport = () => {
    const csvRows = [
      ["Name", "Username", "Attendance"],
      ...participants.map((p) => [p.name, p.username, p.attendance]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvRows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "attendance_report.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="zoom-meeting-container">
      <div className="zoom-meeting-header">
        <h2>Today's Dev Shop Zoom Meeting Attendance</h2>
        <button className="download-btn" onClick={downloadReport}>
          Download Report
        </button>
      </div>

      <div className="top-section">
        <span className="intern-count" onClick={handleInternCountChange}>
          Intern’s <span className="user-count">{internCount} users</span>
        </span>

        {/* Filter Dropdown */}
        <select className="filter-dropdown" onChange={handleFilterSelection} value={filterOption}>
          <option value="">Filter ▼</option>
          <option value="Name">Filter by Name</option>
          <option value="Attendance">Filter by Attendance</option>
          <option value="">Clear Filters</option>
        </select>
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search participants..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <button className="add-btn" onClick={handleAddParticipant}>
        + Add Participant
      </button>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
            </th>
            {filterOption !== "Attendance" && <th>Name</th>}
            {filterOption !== "Name" && <th>Attendance</th>}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((participant) => (
            <tr key={participant.id}>
              <td>
                <input type="checkbox" checked={participant.selected} onChange={() => handleSelectOne(participant.id)} />
              </td>
              {filterOption !== "Attendance" && (
                <td className="participant-info">
                  <span className="participant-name">{participant.name}</span>
                  <span className="participant-username">{participant.username}</span>
                </td>
              )}
              {filterOption !== "Name" && (
                <td>
                <select
                  className="attendance-dropdown"
                  value={participant.attendance}
                  onChange={(e) => handleAttendanceChange(participant.id, e)} 
                >
                  <option value="Present & On-time">Present & On-time</option>
                  <option value="Excused Absence">Excused Absence</option>
                  <option value="Late">Late</option>
                  <option value="Left Early">Left Early</option>
                  <option value="No Show/No Call">No Show/No Call</option>
                  <option value="Unexcused Absence">Unexcused Absence</option>
                  <option value="Not Scheduled">Not Scheduled</option>
                  <option value="Holiday/Cohort Off">Holiday/Cohort Off</option>
                  <option value="Shift Added">Shift Added</option>
                </select>
              </td>
              )}
              <td>
                <button className="edit-btn" onClick={() => handleEdit(participant.id)}>
                  ✏️
                </button>
                <button className="delete-btn" onClick={() => handleDelete(participant.id)}>
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          ← Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= Math.ceil(filteredParticipants.length / usersPerPage)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};




export default ZoomMeetingAttendance;