import { Typography } from "@mui/material";
import React from "react";
import { GrayTypography } from "../../styles/fontStyles/TypographyStyles";
import { FlexColumn, FlexRow } from "../GlobalStyles";
import { SquareColor } from "./SquareColorStyle";

const SelectorColors = () => {
  return (
    <FlexColumn
      style={{
        alignItems: "flex-start",
        marginLeft: "1.5rem",
        marginTop: "1.5rem",
      }}
    >
      <GrayTypography sx={{ mb: ".6rem" }}>COLOR</GrayTypography>
      <FlexRow style={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
        <SquareColor bgColor={"#DFDED9"} />
        <SquareColor bgColor={"#FF6E61"} />
        <SquareColor bgColor={"#FFBC00"} />
        <SquareColor bgColor={"#293688"} />
        <SquareColor bgColor={"#9747FF"} />
        <SquareColor bgColor={"#D1094B"} />
        <SquareColor bgColor={"#000F08"} />
        <SquareColor bgColor={"#3A3A3A"} />
        <SquareColor bgColor={"#334ADF"} />
        <SquareColor bgColor={"#FFA7A7"} />
        <SquareColor bgColor={"#1AC20C"} />
      </FlexRow>
    </FlexColumn>
  );
};

export default SelectorColors;
