import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>
        <div style={{ color: "red" }}>Recent Transactions:</div>
      </Title>
      <Typography component="p" variant="h4" style={{ color: "red" }}>
        $47.99
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ flex: 1 }}
        style={{ color: "black" }}
      >
        on May 8, 2024
      </Typography>
      <div>
        <Link
          color="primary"
          href="#"
          style={{ color: "red" }}
          onClick={preventDefault}
        >
          View Prior Transactions
        </Link>
      </div>
    </React.Fragment>
  );
}
