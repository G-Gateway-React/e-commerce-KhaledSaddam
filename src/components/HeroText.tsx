import { Box, Typography } from "@mui/material";
import React from "react";
import { Button } from "./ButtonStyled";

const HeroText = () => {
  return (
    <Box
      marginLeft={8}
      style={{
        position: "absolute",
        width: "40%",
        left: "0",
        top: "30%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Typography textAlign="left" variant="h3" component="h5">
        <span style={{ color: "#D1094B" }}>
          NEW
          <br />
        </span>
        COLLECTION
      </Typography>
      <Typography marginBottom={4} textAlign="left">
        Our Easiest Chuck-On-And-Go Staples Come With A Serious Style Heritage
        That's Liberating, Sexy, Comfy And Supremely Cool.
      </Typography>
      <Button>SHOP NEW ARRIVALS</Button>
    </Box>
  );
};

export default HeroText;
