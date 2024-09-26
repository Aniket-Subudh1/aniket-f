import { Button, Stack } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Signup from './../../pages/Signup';
import Login from './../../pages/Login';
import { Route } from "react-router-dom";
import LoginForm from './../Forms/LoginForm';
import { Link } from "react-router-dom";


const ConnectButton = ({ sx = {}, ...props }) => {
  return (
   <Link to={'/l'}>
       <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
      Login
      <KeyboardArrowRightIcon />
    </Button>
   </Link>
  );
};

export default ConnectButton;
