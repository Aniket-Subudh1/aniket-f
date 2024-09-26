import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footers/MainFooter";
import Navbar from "../components/Navbars/MainNavbar";
import Section1 from "../containers/Section1";
import Section10 from "../containers/Section10";
import Section3 from "../containers/Section3";
import Section4 from "../containers/Section4";
import Section6 from "../containers/Section6";
import Section8 from "../containers/Section8";


const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
    
      {/* Sections */}
      <Section1 />
      
      <Box sx={{ bgcolor: "background.default", position: "relative" }}>
        <Section3 />
        <Section4 />
        <Section6 />
        <Section8 />     
        <Section10 />
        {/* Footer */}
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
