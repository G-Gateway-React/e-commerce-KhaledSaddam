import { Typography } from "@mui/material";
import React from "react";
import { CardContainer } from "../components/Cards/CardStyles";
import CategoryCard from "../components/Cards/CategoryCard";
import HeroImage from "../components/HeroImage";
import { ImagesPath } from "../images/ImagesPath";

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <HeroImage />
        <Typography margin="40px auto" variant="h4">
          <span style={{ backgroundColor: "#D1094B", color: "#fff" }}>
            CATEGOR
          </span>
          IES
        </Typography>
      </header>
      <CardContainer>
        <CategoryCard title={"Tops"} imgPath={ImagesPath.Frame8} />
        <CategoryCard title={"Tees & Tanks"} imgPath={ImagesPath.Frame9} />
        <CategoryCard title={"T-Shirts"} imgPath={ImagesPath.Frame10} />
        <CategoryCard title={"Jackets"} imgPath={ImagesPath.Frame11} />
        <CategoryCard title={"Knitwear"} imgPath={ImagesPath.Frame12} />
        <CategoryCard title={"Shorts"} imgPath={ImagesPath.Frame13} />
        <CategoryCard title={"Tops"} imgPath={ImagesPath.Frame14} />
        <CategoryCard title={"Skirts"} imgPath={ImagesPath.Frame15} />
      </CardContainer>
    </>
  );
};

export default HomePage;
