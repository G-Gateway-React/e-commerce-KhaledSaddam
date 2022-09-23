import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../store/auth';
import { Button } from './ButtonStyled';

const Responsive = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const HeroText = () => {
  const token = useSelector(selectCurrentToken);
  const handleClick = () => {
    console.log('Token: ', token);
  };
  return (
    <Responsive
      marginLeft={20}
      sx={{
        position: 'absolute',
        width: '40%',
        left: '0',
        top: '30%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
    >
      <Typography sx={{ fontSize: '3vw' }} textAlign="left">
        <span style={{ color: '#D1094B' }}>
          NEW
          <br />
        </span>
        COLLECTION
      </Typography>
      <Typography sx={{ fontSize: '1vw' }} marginBottom={4} textAlign="left">
        Our Easiest Chuck-On-And-Go Staples Come With A Serious Style Heritage
        That's Liberating, Sexy, Comfy And Supremely Cool.
      </Typography>
      <Button onClick={handleClick}>SHOP NEW ARRIVALS</Button>
    </Responsive>
  );
};

export default HeroText;
