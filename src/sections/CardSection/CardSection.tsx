import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Card from '../../components/Card/Card';

import { ContentfulComponent, ContentfulPage, ContentfulSection } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

const getColumnWidth = ({ index, numCards }: { index: number, numCards: number }) => {
  const cardNum = index + 1;

  // if 3 or less, split the columns
  if (numCards < 3) return 12 / numCards;

  // if divisible by 3 and more than 1 row, set top card full width, next 2 half width
  if (numCards % 3 === 0 && numCards > 5) {
    if (cardNum === 1) return 12;
    if (cardNum <= 3) return 12 / 2;
  }
  // if number = 4 or 7 or 10, set first card full width
  if ((numCards % 3 === 1) && cardNum === 1) return 12;

  // if number = 5 or 8 or 12, set first 2 cards half width
  if ((numCards % 3 === 2 && cardNum < 3) || (numCards === 5 && cardNum < 2)) return 12 / 2;

  // default return 1/3
  return 12 / 3;
};

interface CardsSectionProps {
  section: ContentfulSection,
  type: string // should be limited to enum set,
  // parentId: string
}

const CardsSection = ({ section, type }: CardsSectionProps) => {
  const {
    heading,
    subheading,
    components
  } = section ?? {};

  // const componentId = `${parentId}.${contentData.slug}`;

  return (
    <Container component="section" sx={{ marginTop: '2em' }}>
      {heading && (<Typography variant="h2" align="center" gutterBottom>{heading}</Typography>)}
      {subheading && (<Typography variant="body1" align="center" gutterBottom>{subheading}</Typography>)}
      {components && (
        <Grid container spacing={3}>
          {components?.map((component, index, cardArray) => {
            const columnWidth = getColumnWidth({ index, numCards: cardArray.length });

            return (
              // key needs to use random because cards are duplicated for demo
              <Grid item key={`${component?.id}-${Math.random()}`} md={columnWidth} sx={{ display: 'flex' }}>
                <Card
                  index={index}
                  // parentId={componentId}
                  layout={columnWidth === 12 ? 'single' : undefined}
                  type={type}
                  component={component as ContentfulComponent}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default CardsSection;
