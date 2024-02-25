import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { FaChevronDown } from 'react-icons/fa';

function createData(name, projectManager, dueDate, status, progress) {
  return { name, projectManager, dueDate, status, progress };
}

const rows = [
  createData("Nelsa web development", "Om Prakash", "May 25, 2023", "Completed", "100%"),
  createData("Datascale AI app", "Neilsan Mando", "June 20, 2023", "Delayed", "36%"),
  createData("Media channel branding", "Tiruvelly Priya", "July 13, 2023", "At Risk", "66%"),
  createData("Corlax IOS app development", "Matte Hannery", "Dec 20, 2023", "Completed", "100%"),
];

const makeStyle = (status) => {
  let backgroundColor, color;
  switch (status) {
    case 'Completed':
      backgroundColor = 'rgb(145 254 159 / 47%)';
      color = 'green';
      break;
    case 'Delayed':
      backgroundColor = '#ffadad8f';
      color = 'yellow';
      break;
    case 'At Risk':
      backgroundColor = '#ffadad8f';
      color = 'red';
      break;
    default:
      backgroundColor = '#59bfff';
      color = 'white';
  }
  return {
    background: backgroundColor,
    color: color,
    borderRadius: '9px',
    padding: '8px',
    display: 'inline-block'
  };
}

const TableComponent = () => {
  return (
    <div className="bg-amber-100 p-5">
      <TableContainer component={Paper} className="bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center px-4 py-2 bg-amber-100 rounded-t-lg">
          <div className="font-bold">Project Summary</div>
          <div className="flex items-center justify-end space-x-4">
      <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
        Projects <FaChevronDown className="ml-1" />
      </div>
      <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
        Project Manager <FaChevronDown className="ml-1" />
      </div>
      <div className="flex items-center rounded-full bg-white text-black p-2 cursor-pointer">
        Status <FaChevronDown className="ml-1" />
      </div>
    </div>
          
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Project Manager</TableCell>
              <TableCell align="left">Due Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="left">{row.projectManager}</TableCell>
                <TableCell align="left">{row.dueDate}</TableCell>
                <TableCell align="left">
                  <span className="bg-white px-2 py-1 rounded-full" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left">{row.progress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;
