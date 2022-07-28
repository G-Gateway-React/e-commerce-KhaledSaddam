import { Typography } from "@mui/material";
import React from "react";
import HeroImage from "../components/HeroImage";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <header>
      <HeroImage />
      <Typography margin="40px auto" variant="h4">
        <span style={{ backgroundColor: "#D1094B", color: "#fff" }}>
          CATEGOR
        </span>
        IES
      </Typography>
    </header>
  );
};

export default HomePage;
