import React from 'react';
import { useTable, useFilters, useGlobalFilter } from 'react-table';
import fakeData from './attendanceSheet.json'
import "./tableStyles.css";

const Table = ({ columns, data }) => {
 const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable(
  { 
    columns, 
    data,
    initialState:{
      globalFilter: "" //initial global filter value
    }
  },

    useFilters,
    useGlobalFilter // useFilters hook for filtering

  );

  const { globalFilter } = state;


return (
<div>
{/* <input
  type="text"
  value={globalFilter}
  onChange={e => setGlobalFilter(e.target.value)}
  placeholder="Search..." // add a search input for global filtering
  /> */} 

<table className="table" {...getTableProps()}> {/* Returns an object of props that can be spread into a table element */}
          <thead className="tHead">
            {headerGroups.map(headerGroup => ( //An array of objects that represents the header groups of each table.
              <tr className="trHead" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th className="th" {...column.getHeaderProps()}> {/* Table Header */}
                    {column.render("Header")} {/* Displays the value from the "Header" slot of each row! */}
                    <input 
                      type="text"
                      value={column.filterValue || ""}
                      onChange={e => column.setFilter(e.target.value)}
                      placeholder="Filter..." //add a filter input for each column
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="tBody" {...getTableBodyProps}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className="trBody" {...row.getRowProps}>
                  {row.cells.map((cell) => (
                    <td className="td" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              )

            })}

          </tbody>
        </table>
</div>
);
};
export default Table;