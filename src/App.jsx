import { useState } from 'react';
import './App.css';
import React from 'react';
import Table from "./Table.jsx";
import fakeData from './attendanceSheet.json'

function App() {
  const [count, setCount] = useState(0)
  console.log(fakeData);
  

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(() => [
    {
      width: 300,
      Header: "ICON",
      Cell: ({ cell }) => (
        <a href= {"https://www.google.com/search?q=" + cell.row.values.name}>
          (IMAGE)
        </a>
      )
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Total Present",
      accessor: "totalPresent",
    },
    {
      Header: "Late",
      accessor: "late",
    },
    {
      Header: "Excused Absences",
      accessor: "excusedAbsences",
    },
    {
      Header: "NO Call/No Show",
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

        <div className="header"> 
          
          <div className="headerText"> 
            <p>Team Members <b>100 users</b></p> 
            
          </div>

          <div className="headerButton"> 
            <button id="dlowReport">Download Report</button>
          </div>

        </div>

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
