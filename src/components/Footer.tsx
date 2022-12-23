import { TextField, Typography } from "@mui/material";
import React from "react";
import { FlexColumn, FlexRow } from "./GlobalStyles";
import { SlimTypography } from "../styles/fontStyles/TypographyStyles";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import styled from "styled-components";
import { StyledLink } from "../styles/linkStyles/StyledLink";

const Footer = () => {
  return (
    <FooterSection>
      <FlexColumn style={{ alignItems: "center" }}>
        <StyledLink to={"/signup"}>
          <Typography sx={{ fontSize: "1.4rem" }}>
            SIGN UP FOR UPDATES
          </Typography>
        </StyledLink>
        <SlimTypography
          sx={{
            fontWeight: "100",
          }}
        >
          Sign up for exclusive early sale access and tailored new arrivals.
        </SlimTypography>
        <FlexRow style={{ width: "35%", position: "relative" }}>
          <TextField
            inputProps={{
              style: { backgroundColor: "white" },
            }}
            sx={{
              width: "100%",
              margin: "1rem .5rem 0 0",
            }}
            id="email-address"
            label="Your email address"
            variant="filled"
          />
          <Typography
            sx={{ fontWeight: "bold", position: "absolute", right: "10px" }}
            paddingTop="1.2rem"
          >
            JOIN
          </Typography>
        </FlexRow>
      </FlexColumn>
      <FlexRow
        className="row-footer-links"
        style={{
          marginTop: "5rem",
          alignItems: "flex-start",
          paddingLeft: "5rem",
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
            <SlimTypography>
              <AiFillFacebook style={{ marginRight: "1rem" }} />
              FACEBOOK
            </SlimTypography>
          </FlexRow>
          <FlexRow>
            <SlimTypography>
              <FiInstagram style={{ marginRight: ".6rem" }} />
              INSTAGRAM
            </SlimTypography>
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
    </FooterSection>
  );
};

export default Footer;
export const FooterSection = styled.footer`
  margin-top: 4rem;
  padding-bottom: 3rem;
`;
