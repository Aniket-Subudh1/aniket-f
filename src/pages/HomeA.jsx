import React from 'react'
import NavbarA from '../components/Navbars/NavbarA'
import Section1 from '../containers/Section1'
import { Box } from "@mui/material";
import Section3 from '../containers/Section3'
import Section4 from '../containers/Section4'
import Section6 from '../containers/Section6'
import Section8 from '../containers/Section8'
import Section10 from '../containers/Section10'
import Footer from '../components/Footers/MainFooter'

const HomeA = () => {
  return (
    <div>
      <NavbarA/>
      <Section1/>
      
      <Box sx={{ bgcolor: "background.default", position: "relative" }}>
        <Section3 />
        <Section4 />
        <Section6 />
        <Section8 />     
        <Section10 /> 
        <Footer /> 
      </Box>
    </div>
  )
}

export default HomeA;
