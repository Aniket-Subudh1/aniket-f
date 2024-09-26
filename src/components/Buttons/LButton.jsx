import { Button, Stack } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Signup from './../../pages/Signup';
import Login from './../../pages/Login';
import { Link } from "react-router-dom";


const LButton = ({ sx = {}, ...props }) => {
  return (
      <Link to={'/s'}>
            <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      Signup
      <KeyboardArrowRightIcon />
    </Button>
      </Link>
  );
};

export default LButton;
