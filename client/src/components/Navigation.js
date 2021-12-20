import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="bar">
      <Link to="/">
        <Typography variant="body1">Home</Typography>
      </Link>
      <Link to="/about">
        <Typography variant="body1">About</Typography>
      </Link>
    </div>
  );
}
