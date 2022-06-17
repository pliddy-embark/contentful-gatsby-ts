import React from 'react';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

interface ComponentProps { value: number }

const Component = ({ value }: ComponentProps) => (
  <>
    <Typography variant="h2" gutterBottom mt={4}>
      Ratings
    </Typography>
    <Stack direction="row">
      <Rating name="read-only" value={value} precision={0.5} readOnly />
      <Link
        display="inline-block"
        href="/"
        sx={{
          fontSize: '14px',
          fontWeight: 'normal',
          textDecoration: 'underline',
          marginLeft: '3px'
        }}
      >
        2549 Reviews
      </Link>
    </Stack>
  </>
);

export default Component;
