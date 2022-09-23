import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CardPrice from '../components/CardPrice'
import { ImagesPath } from '../images/ImagesPath'
import ClearIcon from '@mui/icons-material/Clear'
import { FlexColumn } from '../components/GlobalStyles'
import { CustomButton } from '../styles/custom-mui-theme/CustomComponents'

const Bag = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid
                container
                xs={5.4}
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <ClearIcon />
                <Typography>REMOVE ALL</Typography>
            </Grid>
            <CardPrice
                ImagePath={ImagesPath.Rectangle21}
                price={'$340.00'}
                title={'NIKE SHOES BOYFRIEND PAIRS'}
            />
            <CardPrice
                ImagePath={ImagesPath.Rectangle23}
                price={'$150.00'}
                title={'VICTORIOUS NIKE SHOES BOYFRIEND SET'}
            />
            <Grid item sx={{ mt: '2rem' }} direction="column">
                <Typography
                    sx={{
                        color: '#D1094B',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        mb: '2rem',
                    }}
                >
                    Total USD $490.00
                </Typography>
                <CustomButton style={{ padding: '1rem 5rem' }}>
                    CHECKOUT
                </CustomButton>
            </Grid>
        </Grid>
    )
}

export default Bag
