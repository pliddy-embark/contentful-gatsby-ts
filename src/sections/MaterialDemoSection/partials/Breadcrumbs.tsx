import React from 'react';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Component = () => (
  <Breadcrumbs aria-label="breadcrumb">
    <Link href="/">
      Home
    </Link>
    <Link href="/">
      Category
    </Link>
    <Typography variant="body2">Breadcrumb</Typography>
  </Breadcrumbs>
);

export default Component;
