import { Box } from "@mui/material";
import React from "react";
import { ImagesPath } from "../images/ImagesPath";

const CheckboxIcon = () => {
  return (
    <Box>
      <img
        style={{ borderRadius: "6px", width: "24px", height: "24px" }}
        src={ImagesPath.CheckboxIcon}
        alt=""
      />
    </Box>
  );
};

export default CheckboxIcon;
