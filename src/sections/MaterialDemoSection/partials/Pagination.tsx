import React from 'react';

import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

const Component = () => (
  <>
    <Typography variant="h2" gutterBottom mt={4}>
      Pagination
    </Typography>
    <Pagination count={10} color="secondary" />
  </>
);

export default Component;
