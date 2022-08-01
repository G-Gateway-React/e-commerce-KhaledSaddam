import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FlexColumn, FlexRow } from "../components/GlobalStyles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ImagesPath } from "../images/ImagesPath";
import "../styles/swiperStyles/style.css";
import { FiHeart } from "react-icons/fi";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SelectorColors from "../components/SelectorColors/SelectorColors";
import { GrayTypography } from "../styles/fontStyles/TypographyStyles";
import ProductsSelector from "../components/ProductsSelector/ProductsSelector";
import CustomizedAccordions from "../components/Accordion/Accordion";
import { CustomButton } from "../styles/custom-mui-theme/CustomComponents";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ProductPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Box sx={{ flexGrow: 1, px: "2rem", mx: "5rem" }}>
        <FlexRow style={{ justifyContent: "flex-start" }}>
          <Typography>Shop </Typography>
          <Typography> / Shirts</Typography>
          <Typography> / Skeleton Hand Shirt</Typography>
        </FlexRow>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={ImagesPath.skeletonShirt} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImagesPath.img1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImagesPath.img2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImagesPath.img3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImagesPath.img4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImagesPath.img5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImagesPath.img6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImagesPath.img7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ImagesPath.img8} alt="" />
              </SwiperSlide>
            </Swiper>
          </Grid>

          <Grid item xs={4}>
            <FlexColumn style={{ width: "90%", alignItems: "flex-start" }}>
              <Typography sx={{ ml: "1.5rem", mb: "3rem" }}>
                SKELETON HAND SHIRT
              </Typography>
              <Typography sx={{ ml: "1.5rem" }} variant="h4">
                $24.59
              </Typography>
              <SelectorColors />
              <FlexColumn
                style={{
                  alignItems: "flex-start",
                  marginLeft: "1.5rem",
                  marginTop: "1.5rem",
                }}
              >
                <GrayTypography sx={{ mb: ".6rem" }}>SIZE</GrayTypography>
                <FlexRow
                  style={{ flexWrap: "wrap", justifyContent: "flex-start" }}
                >
                  <Button>S</Button>
                  <Button>M</Button>
                  <Button>L</Button>
                  <Button>XL</Button>
                </FlexRow>
              </FlexColumn>
              <Box sx={{ alignItems: "flex-end", mt: "auto" }}>
                <CustomButton
                  sx={{
                    bgcolor: "#000",
                    width: "300px",
                    height: "60px",
                    fontSize: "1.2rem",
                    ml: "1.5rem",
                  }}
                >
                  <FiHeart
                    style={{ marginRight: "1rem", fontSize: "1.8rem" }}
                  />
                  ADD TO BAG
                </CustomButton>
              </Box>
            </FlexColumn>
          </Grid>
          <Grid item xs={12}>
            <ProductsSelector />
          </Grid>
          <Grid item xs={12}>
            <FlexRow>
              <CustomizedAccordions />
              <CustomizedAccordions />
              <CustomizedAccordions />
            </FlexRow>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductPage;
