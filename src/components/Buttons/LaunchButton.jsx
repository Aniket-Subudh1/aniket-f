import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom"
const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Link to={'/l'}>
    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      Login / Signup
      <KeyboardArrowRightIcon />
    </Button>
    </Link>
  );
};

export default LaunchButton;
