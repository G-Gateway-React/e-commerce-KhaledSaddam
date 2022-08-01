import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { StyledLink } from "../styles/linkStyles/StyledLink";
import { FlexColumn } from "../components/GlobalStyles";
import CustomizedAccordions from "../components/Accordion/Accordion";
import {
  GrayTypography,
  SlimTypography,
} from "../styles/fontStyles/TypographyStyles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CustomerService = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "0 2rem" }}>
      <Typography sx={{ textAlign: "left" }}>
        <StyledLink to="/">Home</StyledLink> / Customer Service
      </Typography>
      <Grid container spacing={2} my={5}>
        <Grid item xs={2}>
          <GrayTypography mb={"2rem"} textAlign={"left"}>
            CATEGORIES
          </GrayTypography>
          <FlexColumn>
            <SlimTypography>CONTACT</SlimTypography>
            <SlimTypography>TRACK ORDER</SlimTypography>
            <SlimTypography>DELIVERY & RETURNS</SlimTypography>
            <SlimTypography>PAYMENTS</SlimTypography>
            <SlimTypography>MAKE A RETURN</SlimTypography>
            <SlimTypography>FAQ</SlimTypography>
          </FlexColumn>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h3" component="h3" textAlign={"left"}>
            Customer Service
          </Typography>
          <FlexColumn style={{ alignItems: "flex-start" }}>
            <Box mt="3rem" mb=".5rem">
              <GrayTypography>ORDER ISSUES</GrayTypography>
            </Box>
            <CustomizedAccordions />
            <Box mt="3rem" mb=".5rem">
              <GrayTypography>DELIVERY</GrayTypography>
            </Box>
            <CustomizedAccordions />
            <Box mt="3rem" mb=".5rem">
              <GrayTypography>RETURNS & REFUNDS</GrayTypography>
            </Box>
            <CustomizedAccordions />
            <Box mt="3rem" mb=".5rem">
              <GrayTypography>PAYMENT</GrayTypography>
            </Box>
            <SlimTypography textAlign={"left"}>
              At Modnikky, you are shopping pieces from our luxury brands and
              partners around the globe, expertly curated for you by our team.
              Prices are determined by each our partner, therefore the price of
              the same item may vary depending on your location and where you
              order an item from.
            </SlimTypography>
            <CustomizedAccordions />
          </FlexColumn>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerService;
