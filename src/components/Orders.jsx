import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(txId, user, date, cost) {
  return { txId, user, date, cost };
}

const rows = [
  {
    txId: "01e4dsa",
    user: "johnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>
        <div style={{ color: "red" }}>Recent Transactions</div>
      </Title>
      <div style={{ maxHeight: 200, overflow: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Transaction Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>User ID</TableCell>
              <TableCell align="right">Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.txId}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell align="right">{`$${row.cost}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        More Orders
      </Link>
    </React.Fragment>
  );
}
