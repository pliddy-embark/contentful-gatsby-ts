import React from 'react';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Colors = () => {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h2" gutterBottom mt={4}>
        Colors
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Primary
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.black,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Secondary
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.tertiary.main,
            color: theme.palette.common.white,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Tertiary
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Primary - Light
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.common.black,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Secondary - Light
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.tertiary.light,
            color: theme.palette.common.black,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Tertiary - Light
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.common.white,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Primary - Dark
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.common.black,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Secondary - Dark
            </Typography>
          </Box>
        </Grid>
        <Grid item xs>
          <Box sx={{
            backgroundColor: theme.palette.tertiary.dark,
            color: theme.palette.common.white,
            height: '100%',
            minHeight: '4rem',
            padding: '1rem'
          }}
          >
            <Typography variant="h6" component="p">
              Tertiary - Dark
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Colors;
