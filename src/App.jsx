<<<<<<< Updated upstream
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
=======
import React from 'react';
import { useTable } from 'react-table';
import Select from 'react-select';

const obj = {
  firstname: "nick",
  lastname: "blackson"
};

const TableAndDropdown = () => {
  const data = [
    { firstname: obj.firstname, lastname: obj.lastname }
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstname',
      },
      {
        Header: 'Last Name',
        accessor: 'lastname',
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const options = [
    { value: obj.firstname, label: obj.firstname },
    { value: obj.lastname, label: obj.lastname }
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <h2>Table</h2>
        <table {...getTableProps()} border="1" style={{ borderCollapse: 'collapse' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} style={{ padding: '8px', textAlign: 'left' }}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()} style={{ padding: '8px' }}>{cell.render('Cell')}</td>
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <h2>Dropdown</h2>
        <Select
          options={options}
          onChange={(selectedOption) => {
            console.log('Selected:', selectedOption);
          }}
          placeholder="Select a name"
          styles={{
            control: (provided) => ({
              ...provided,
              width: '200px',
              border: '1px solid #ccc',
              boxShadow: 'none',
            }),
            menu: (provided) => ({
              ...provided,
              width: '200px',
            })
          }}
        />
      </div>
    </div>
  );
};

export default TableAndDropdown;
>>>>>>> Stashed changes
