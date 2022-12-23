import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FlexColumn, FlexRow } from '../components/GlobalStyles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ImagesPath } from '../images/ImagesPath'
import '../styles/swiperStyles/style.css'
import { FiHeart } from 'react-icons/fi'
// import required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper'
import SelectorColors from '../components/SelectorColors/SelectorColors'
import { GrayTypography } from '../styles/fontStyles/TypographyStyles'
// import ProductsSelector from "../components/ProductsSelector/ProductsSelector";
import CustomizedAccordions from '../components/Accordion/Accordion'
import { CustomButton } from '../styles/custom-mui-theme/CustomComponents'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))
const ProductPage: React.FC = (): JSX.Element => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()
    return (
        <>
            <Box sx={{ flexGrow: 1, px: '2rem', mx: '5rem' }}>
                <FlexRow style={{ justifyContent: 'flex-start' }}>
                    <Typography>Shop </Typography>
                    <Typography> / Shirts</Typography>
                    <Typography> / Skeleton Hand Shirt</Typography>
                </FlexRow>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Swiper
                            style={{
                                //"--swiper-navigation-color": "#fff",
                                //"--swiper-pagination-color": "#fff",
                                height: '60%',
                            }}
                            loop={false}
                            spaceBetween={4}
                            navigation={true}
                            thumbs={{
                                swiper:
                                    thumbsSwiper && !thumbsSwiper.destroyed
                                        ? thumbsSwiper
                                        : null,
                            }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
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
                            <SwiperSlide>
                                <img
                                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://swiperjs.com/demos/images/nature-10.jpg"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                        <CustomSwiper
                            onSwiper={setThumbsSwiper}
                            loop={false}
                            spaceBetween={6}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={false}
                            modules={[FreeMode, Navigation, Thumbs]}
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
                            <SwiperSlide>
                                <img
                                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://swiperjs.com/demos/images/nature-10.jpg"
                                    alt=""
                                />
                            </SwiperSlide>
                        </CustomSwiper>
                    </Grid>

                    <Grid item xs={6}>
                        <FlexColumn
                            style={{ width: '90%', alignItems: 'flex-start' }}
                        >
                            <Typography sx={{ ml: '1.5rem', mb: '3rem' }}>
                                SKELETON HAND SHIRT
                            </Typography>
                            <Typography sx={{ ml: '1.5rem' }} variant="h4">
                                $24.59
                            </Typography>
                            <SelectorColors />
                            <FlexColumn
                                style={{
                                    alignItems: 'flex-start',
                                    marginLeft: '1.5rem',
                                    marginTop: '1.5rem',
                                }}
                            >
                                <GrayTypography sx={{ mb: '.6rem' }}>
                                    SIZE
                                </GrayTypography>
                                <FlexRow
                                    style={{
                                        flexWrap: 'wrap',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <Button>S</Button>
                                    <Button>M</Button>
                                    <Button>L</Button>
                                    <Button>XL</Button>
                                </FlexRow>
                            </FlexColumn>
                            <Box sx={{ alignItems: 'flex-end', mt: 'auto' }}>
                                <CustomButton
                                    sx={{
                                        bgcolor: '#000',
                                        width: '300px',
                                        height: '60px',
                                        fontSize: '1.2rem',
                                        ml: '1.5rem',
                                    }}
                                >
                                    <FiHeart
                                        style={{
                                            marginRight: '1rem',
                                            fontSize: '1.8rem',
                                        }}
                                    />
                                    ADD TO BAG
                                </CustomButton>
                            </Box>
                        </FlexColumn>
                    </Grid>
                    {/* <Grid item xs={12}>
            <ProductsSelector />
          </Grid> */}
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
    )
}

export default ProductPage

/*
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
*/

const CustomSwiper = styled(Swiper)`
    width: 100%;
    height: 80px;
`
