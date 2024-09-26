import { Button, Stack } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Signup from './../../pages/Signup';
import Login from './../../pages/Login';


const LButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      Signup
      <KeyboardArrowRightIcon />
    </Button>
  );
};

export default LButton;
