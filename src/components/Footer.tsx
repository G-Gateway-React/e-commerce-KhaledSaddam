import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { FlexColumn, FlexRow } from "./GlobalStyles";
import { SlimTypography } from "../styles/fontStyles/SlimTypography";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <FlexColumn>
        <Typography>SIGN UP FOR UPDATES</Typography>
        <Typography
          sx={{
            fontSize: "11px",
            fontWeight: "100",
          }}
        >
          Sign up for exclusive early sale access and tailored new arrivals.
        </Typography>
        <FlexRow>
          <TextField
            sx={{ width: "35%", margin: "1rem .5rem 0 0" }}
            id="email-address"
            label="Your email address"
            variant="filled"
          />
          <Typography paddingTop="1.2rem">JOIN</Typography>
        </FlexRow>
      </FlexColumn>
      <FlexRow
        className="row-footer-links"
        style={{
          margin: "5rem 0 5rem 0",
          alignItems: "flex-start",
          padding: "0 5rem 0 5rem",
        }}
      >
        <FlexColumn
          className="column-footer-links"
          style={{ alignItems: "flex-start" }}
        >
          <Typography
            style={{ marginBottom: "5rem", fontWeight: "bold" }}
            component="strong"
          >
            CUSTOMER SERVICE
          </Typography>
          <SlimTypography>CONTACT</SlimTypography>
          <SlimTypography>TRACK ORDER</SlimTypography>
          <SlimTypography>DELIVERY & RETURNS</SlimTypography>
          <SlimTypography>PAYMENTS</SlimTypography>
          <SlimTypography>MAKE A RETURN</SlimTypography>
          <SlimTypography>FAQ</SlimTypography>
        </FlexColumn>

        <FlexColumn
          className="column-footer-links"
          style={{ alignItems: "flex-start" }}
        >
          <Typography
            style={{ marginBottom: "5rem", fontWeight: "bold" }}
            component="strong"
          >
            INFO
          </Typography>
          <SlimTypography>GIFT VOUCHERS</SlimTypography>
          <SlimTypography>SIZE GUIDE</SlimTypography>
          <SlimTypography>CAREERS</SlimTypography>
          <SlimTypography>ABOUT US</SlimTypography>
          <SlimTypography>GUIDE</SlimTypography>
          <SlimTypography>LEGAL POLICIES</SlimTypography>
        </FlexColumn>
        <FlexColumn
          className="column-footer-links"
          style={{ alignItems: "flex-start" }}
        >
          <Typography
            style={{ marginBottom: "5rem", fontWeight: "bold" }}
            component="strong"
          >
            FOLLOW US
          </Typography>
          <FlexRow>
            <AiFillFacebook style={{ marginRight: "1rem" }} />
            <SlimTypography>FACEBOOK</SlimTypography>
          </FlexRow>
          <FlexRow>
            <FiInstagram style={{ marginRight: ".6rem" }} />
            <SlimTypography>INSTAGRAM</SlimTypography>
          </FlexRow>
        </FlexColumn>
        <FlexColumn
          className="column-footer-links"
          style={{ alignItems: "flex-start" }}
        >
          <Typography
            style={{ marginBottom: "5rem", fontWeight: "bold" }}
            component="strong"
          >
            CONTACT US
          </Typography>
          <SlimTypography>HELLO @SHOESLY.COM</SlimTypography>
          <SlimTypography>+972597097813</SlimTypography>
        </FlexColumn>
      </FlexRow>
    </footer>
  );
};

export default Footer;
