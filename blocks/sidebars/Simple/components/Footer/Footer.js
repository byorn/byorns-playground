import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="text.secondary"
        gutterBottom
      >
        &copy; byorns-playground. 2023, All rights reserved
      </Typography>
      <Typography
        align={'center'}
        variant={'caption'}
        color="text.secondary"
        component={'p'}
      >

      </Typography>
    </Box>
  );
};

export default Footer;
