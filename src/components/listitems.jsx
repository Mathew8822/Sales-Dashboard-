import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";


export const mainListItems = (
  <React.Fragment>
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "red" }}>Ken's Restaturant</h2>
      <p style={{ color: "red" }}>
        <b>
          <u>Dashboard Owner</u>
        </b>
      </p>
    </div>
    <ListItemButton>
      <ListItemText style={{ color: "red", textAlign: "center" }} primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText style={{ color: "red", textAlign: "center" }} primary="Order History" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText style={{ color: "red", textAlign: "center" }} primary="FAQS" />
    </ListItemButton>
    <ListItemButton></ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader
      component="div"
      inset
      style={{ backgroundColor: "black", color: "red" }}
    >
      <b>
        <u>Saved Reports</u>
      </b>
    </ListSubheader>
    <ListItemButton>
      <ListItemText style={{ color: "red", textAlign: "center" }} primary="This Month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText style={{ color: "red", textAlign: "center" }} primary="Last Six Months" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText style={{ color: "red", textAlign: "center" }} primary="Year End Reporting" />
    </ListItemButton>
  </React.Fragment>
);
