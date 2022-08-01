import { Box, Grid, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { SlimTypography } from "../styles/fontStyles/TypographyStyles";
import { Image } from "../styles/imageStyles/ImageStyles";
import { FlexColumn, FlexRow } from "./GlobalStyles";
import ClearIcon from "@mui/icons-material/Clear";

interface ICardProps {
  ImagePath: string;
  price: string;
  title: string;
}
const CardPrice: React.FC<ICardProps> = ({
  ImagePath,
  price,
  title,
}): JSX.Element => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Divider sx={{ my: "1rem" }} variant="fullWidth" />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Image imgWidth="100%" src={ImagePath} />
          </Grid>
          <Grid item xs={8} textAlign="left" sx={{ mt: "1rem", width: "24vw" }}>
            <Typography>{title}</Typography>
            <Typography
              sx={{
                color: "#D1094B",
                fontSize: "2rem",
                fontWeight: "bold",
                mb: "2rem",
              }}
            >
              USD {price}
            </Typography>
            <SlimTypography>COLOR: WHITE</SlimTypography>
            <SlimTypography>SIZE: 42</SlimTypography>
            <SlimTypography>QUANTITY: 1</SlimTypography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <ClearIcon />
          <Typography>REMOVE</Typography>
        </Grid>
      </Box>
    </>
  );
};

export default CardPrice;
