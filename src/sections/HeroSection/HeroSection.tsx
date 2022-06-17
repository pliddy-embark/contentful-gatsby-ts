import React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Link } from 'gatsby';

import { ContentfulSection, ContentfulComponent } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

import theme from '../../gatsby-theme-material-ui-top-layout/theme';

interface HeroSectionProps {
  section: ContentfulSection
}

const HeroSection = ({ section }: HeroSectionProps) => {
  console.log({ section });

  const { components } = section;

  const heroComponent = components?.[0] as ContentfulComponent;

  const {
    heading,
    image,
    links,
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

              {/* Handling links/buttons can be refactored, but works for demo purposes */}

              {links && (
                <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2} sx={{ pt: 4 }}>
                  {links && (
                    links[0] && links[0].ref && (
                      <Button
                        color="secondary"
                        component={Link}
                        // data-event={`${componentId}.${slugify(links[0].label)}`}
                        // id={`${componentId}.${slugify(links[0].label)}`}
                        size="large"
                        to={`/${links[0].ref.slug}`}
                        variant="contained"
                      >
                        {links[0].label}
                      </Button>
                    )
                  )}
                  {links && (
                    links[1] && links[1].ref && (
                      <Button
                        component={Link}
                        // data-event={`${componentId}.${slugify(links[1].label)}`}
                        // id={`${componentId}.${slugify(links[1].label)}`}
                        size="large"
                        to={`/${links[1].ref.slug}`}
                        variant="contained"
                      >
                        {links[1].label}
                      </Button>
                    )
                  )}
                </Stack>
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