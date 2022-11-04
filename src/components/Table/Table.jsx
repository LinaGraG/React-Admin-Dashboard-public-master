import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Greek yoghurt,packing 150 grm", 18908424, "2 March 2022", "Approved"),
  createData("Cream cheese, packing 200 grm ", 18908424, "2 March 2022", "Pending"),
  createData("Sliced Mozzarella cheese 500 grm.", 18908424, "2 March 2022", "Approved"),
  createData("Semi Skimmed Milk 2 Lt", 18908421, "2 March 2022", "Delivered"),
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: '#3a6eaf',
      color: 'white',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ea6a47',
      color: '#fcfcfc',
    }
  }
  else{
    return{
      background: '#12284c',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h2>Pedidos Recientes</h2>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #404246" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><h2>Producto</h2></TableCell>
                <TableCell align="left"><h2>Tracking ID</h2></TableCell>
                <TableCell align="left"><h2>Date</h2></TableCell>
                <TableCell align="left"><h2>Status</h2></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "#fcfcfc" }}>

              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details"><h3>Details</h3></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
