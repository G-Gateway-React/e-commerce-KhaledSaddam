import React from "react";
import { ListItem, NavLinks, NavStyled } from "./NavStyled";
import { HiSearch } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import { Box } from "@mui/material";
import { StyledLink } from "../styles/linkStyles/StyledLink";
export interface INav {
  isHome: boolean;
}
const Nav: React.FC<INav> = ({ isHome }) => {
  return (
    <NavStyled isHome={isHome}>
      <NavLinks>
        <Box>
          <ListItem>NEW ARRIVALS</ListItem>
          <ListItem>SHOP</ListItem>
          <ListItem>COLLECTIONS</ListItem>
        </Box>
        <StyledLink to="/">
          <Box sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            <span style={{ color: "#D1094B" }}>S</span>hoOp
          </Box>
        </StyledLink>
        <Box>
          <ListItem>
            <HiSearch
              style={{
                marginRight: ".5rem",
                marginTop: ".2rem",
              }}
            />
            SEARCH
          </ListItem>
          <ListItem>
            <StyledLink to={"/signin"}>SIGN IN</StyledLink>
          </ListItem>
          <ListItem>BAG (2)</ListItem>
          <ListItem>
            <BiHeart />
          </ListItem>
        </Box>
      </NavLinks>
    </NavStyled>
  );
};

export default Nav;
