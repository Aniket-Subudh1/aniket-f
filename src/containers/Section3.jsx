import { Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Title from "../components/Title";
import { section3Content } from "../utils/content";

const { title, ITEMS } = section3Content;

const Section3 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20 } }}>
      <Container maxWidth="md">
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center" }}>
          {title}
        </Title>
      </Container>

      
    </Container>
  );
};

export default Section3;
