import React from "react";
import { ImagesPath } from "../images/ImagesPath";
import HeroText from "./HeroText";

const HeroImage = () => {
  return (
    <header>
      <div>
        <img
          style={{
            width: "100%",
          }}
          src={ImagesPath.heroImage}
          alt="Hero-Img"
        />
        <HeroText />
      </div>
    </header>
  );
};

export default HeroImage;
