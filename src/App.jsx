import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import { useTable } from 'react-table';
import Table from "./Table.jsx";
import fakeData from './attendanceSheet.json'

function App() {
  const [count, setCount] = useState(0)
  console.log(fakeData);
  

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => [
    {
      Header: "NAME",
      accessor: "name",
    },
    {
      Header: "PRESENT",
      accessor: "totalPresent",
    },
    {
      Header: "LATE",
      accessor: "late",
    },
    {
      Header: "EXCUSED ABSENCES",
      accessor: "excusedAbsences",
    },
    {
      Header: "NO CALL NO SHOW",
      accessor: "noCallNoShow",
    },
  ], []);

  return (
    <>
    <div className="App">
      <h1>
        Attendance
      </h1>

      <div className="container">
        <Table
        data={data}
        columns={columns}
        />
      </div>
    </div>
    </>
    
  )
  
}

export default App;
