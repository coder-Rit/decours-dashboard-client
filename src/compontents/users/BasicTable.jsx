import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import CallIcon from "@mui/icons-material/Call";

function createData(email, username, mobile, id) {
  return { email, username, mobile, id };
}

export default function BasicTable() {
  const [rows, setrows] = React.useState([]);

  async function getUserInfo() {
    try {
      const response = await axios.get(
        "https://decours-dashboard-server-sf8t.onrender.com/api/v1/getUsers"
        // "http://localhost:4000/api/v1/getUsers"
      ); // Replace with your API endpoint

      console.log(response.data.users);

      if (!response.data) {
        console.log("no api data");
        return;
      }

      let temprows = [];

      for (let index = 0; index < response.data.users.length; index++) {
        const { email, username, mobile, _id } = response.data.users[index];
        temprows.push(createData(email, username, mobile, _id));
      }
      setrows(temprows);
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  }

  React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: "700px",
        margin: "auto",
        marginTop: "50px",
        background: "#303030",
      }}
    >
      <Table sx={{ minWidth: 450, color: "white" }} aria-label="simple table">
        <TableHead sx={{background:"#232324"}}>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Email</TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Username
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Mobile
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Call
            </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.email}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ color: "white" }} component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                {row.username}
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                {row.mobile}
              </TableCell>
              <TableCell
                 
                align="right"
              >
                <a href={`tel:+91${row.mobile}`} style={{textDecoration:"none",color: "#2196f3", cursor: "pointer"}}> <CallIcon></CallIcon></a>
               
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
