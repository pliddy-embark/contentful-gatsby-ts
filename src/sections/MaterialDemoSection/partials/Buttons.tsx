import React from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import DeleteIcon from '@mui/icons-material/Delete';

import ArrowIcon from '../../../assets/icons/ArrowIcon';

const Buttons = () => (
  <>
    <Typography variant="h2" gutterBottom mt={4}>
      Buttons
    </Typography>

    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" size="medium">
          Activate Kit
        </Button>
        <Button variant="outlined" size="large">
          Shop Now
        </Button>
      </div>
      <div>
        <Button color="secondary" variant="contained" size="small">
          Small
        </Button>
        <Button color="secondary" variant="contained" size="medium">
          Sign Up
        </Button>
        <Button color="secondary" variant="contained" size="large">
          Shop Now
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" size="medium" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="outlined" size="large" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" endIcon={<ArrowIcon />}>
          Go to a Page
        </Button>
        <Button variant="contained" size="medium" endIcon={<ArrowIcon />}>
          Go to a Page
        </Button>
        <Button variant="contained" size="large" endIcon={<ArrowIcon />}>
          Go to a Page
        </Button>
      </div>
    </Box>
  </>
);

export default Buttons;
