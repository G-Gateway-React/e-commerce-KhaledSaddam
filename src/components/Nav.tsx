import React from "react";
import { ListItem, NavLinks, NavStyled } from "./NavStyled";
import { HiSearch } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import { Box } from "@mui/material";

const Nav = () => {
  return (
    <NavStyled>
      <NavLinks>
        <Box>
          <ListItem>NEW ARRIVALS</ListItem>
          <ListItem>SHOP</ListItem>
          <ListItem>COLLECTIONS</ListItem>
        </Box>
        <Box sx={{ fontSize: "2rem", fontWeight: "bold" }}>
          <span style={{ color: "#D1094B" }}>S</span>hoOp
        </Box>
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
          <ListItem>SIGN IN</ListItem>
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
