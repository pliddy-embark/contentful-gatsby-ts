import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ContentfulSection, ContentfulComponent } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

import theme from '../../gatsby-theme-material-ui-top-layout/theme';

interface HeroSectionProps {
  section: ContentfulSection
}

const HeroSection = ({ section }: HeroSectionProps) => {
  console.log({ section });

  const {
    components
  } = section;

  const heroComponent = components?.[0] as ContentfulComponent;

  const {
    heading,
    image,
    subheading
  } = heroComponent;

  console.log({ heroComponent });

  const { asset } = image ?? {};
  const { url } = asset ?? {};

  return (
    <Container
      maxWidth={false}
      component="section"
      // id={componentId}
      sx={{
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: url ? `url(${url})` : '',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: image ? '37.5em' : 'auto',
        mb: '2em',
        py: '3em',
        width: '100%'
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={image ? 6 : 12}>
            <Stack direction="column" spacing={1} alignItems="flex-start" sx={{ pb: 2 }}>
              {(heading || section.heading) && (
                <Typography variant="heroTitle">
                  {heading || section.heading}
                </Typography>
              )}
              {(subheading || section.subheading) && (
                <Typography variant="h2">
                  {subheading}
                </Typography>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {/* <pre>{JSON.stringify(section, null, 2)}</pre> */}
    </Container>
  );
};

export default HeroSection;