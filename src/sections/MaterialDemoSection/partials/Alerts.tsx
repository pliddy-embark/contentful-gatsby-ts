import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alerts = () => (
  <>
    <Typography variant="h2" gutterBottom mt={4}>
      Alerts
    </Typography>

    <Grid container spacing={2}>
      <Grid item container direction="column" md>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error alert</Alert>
          <Alert severity="warning">This is a warning alert</Alert>
          <Alert severity="info">This is an info alert</Alert>
          <Alert severity="success">This is a success alert</Alert>
        </Stack>
      </Grid>
      <Grid item container direction="column" md>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="outlined" severity="error">This is an error alert</Alert>
          <Alert variant="outlined" severity="warning">This is a warning alert</Alert>
          <Alert variant="outlined" severity="info">This is an info alert</Alert>
          <Alert variant="outlined" severity="success">This is a success alert</Alert>
        </Stack>
      </Grid>
      <Grid item container direction="column" md>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="filled" severity="error">
            This is an error alert
          </Alert>
          <Alert variant="filled" severity="warning">
            This is a warning alert
          </Alert>
          <Alert variant="filled" severity="info">
            This is an info alert
          </Alert>
          <Alert variant="filled" severity="success">
            This is a success alert
          </Alert>
        </Stack>
      </Grid>
    </Grid>
  </>
);

export default Alerts;
