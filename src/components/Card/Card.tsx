import React, { ReactElement, ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';

import { CardActionArea, CardActions } from '@mui/material/';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import NavLink from '../NavLink/NavLink';
import RenderedHtml from '../../components/RenderedHtml/RenderedHtml';

// import { ComponentData } from 'lib/interfaces';
import { Maybe, ContentfulComponent } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface ClickableWrapperProps {
  // parentId: string,
  linkUrl: string,
  children: ReactElement | ReactElement[]
}
const ClickableWrapper = ({ linkUrl, children }: ClickableWrapperProps) => (
  <CardActionArea
    component={GatsbyLink}
    // data-event={`${parentId}-card`}
    // id={`${parentId}-card`}
    to={`/${linkUrl}`}
  >
    {children}
  </CardActionArea>
);

interface StaticWrapperProps {
  children: ReactElement | ReactElement[]
}

const StaticWrapper = ({ children }: StaticWrapperProps) => (
  <Box className="static">{children}</Box>
);

interface CardWrapperProps {
  children: ReactElement | ReactElement[],
  linkUrl?: Maybe<string> | undefined,
  linkLabel?: Maybe<string> | undefined,
  // parentId: string
}

const CardWrapper = ({
  linkUrl, linkLabel, children
}: CardWrapperProps) => {
  if (linkUrl && !linkLabel) {
    return (
      <ClickableWrapper linkUrl={linkUrl}>
        {children}
      </ClickableWrapper>
    );
  }

  return (
    <StaticWrapper>
      {children}
    </StaticWrapper>
  );
};

interface ComponentProps {
  parentId: string,
  index: number,
  type?: string,
  layout?: string,
  component: ContentfulComponent
}

const Component = ({
  parentId,
  type = 'primary',
  index = 0,
  layout,
  component
}: ComponentProps) => {
  console.log({ component });
  const {
    slug,
    label,
    date,
    heading,
    subheading,
    richText,
    links,
    image
  } = component;

  // optional chaining syntax with ?? (nullish coalescing)
  const { asset, altText } = image ?? {};
  const { url: assetUrl } = asset ?? {};

  const { label: linkLabel } = links?.[0] ?? {};
  const { ref } = links?.[0] ?? {};
  const { slug: linkUrl } = ref ?? {};

  // const componentId = `${parentId}.${slug}-${index}`;

  return (
    <Card component="section" className={`${layout} ${type}`}>
      {/* Card Wrapper is a CardActionArea for clickable cards or a Box for static cards */}
      <CardWrapper linkUrl={linkUrl} linkLabel={linkLabel}>
        <CardMedia
          component="img"
          image={assetUrl || undefined}
          alt={altText || undefined}
          height={800}
          width={600}
        />
        <CardContent>
        <Stack direction="row" spacing={1} mb={2} mt={1}>
            {label && (
              <Chip label={label} color={type === 'primary' ? 'secondary' : 'primary'} />
            )}

            {/* The Overline text displays the date from the content block */}
            {date && (
              <Typography variant="overline" display="inline-block" gutterBottom>
                {new Date(date)
                  .toLocaleDateString('en-US', {
                    month: 'long', day: 'numeric', year: 'numeric'
                  })}
              </Typography>
            )}
          </Stack>

          {/* The heading is displayed as a link if one is present in the content block's linksCollection or else as static text */}
          {heading && linkUrl && linkLabel && (
            <Link
              component={GatsbyLink}
              // data-event={`${componentId}-heading`}
              // id={`${componentId}-heading`}
              to={`/${linkUrl}`}
              variant="h3"
            >
              {heading}
            </Link>
          )}

          {/* The heading is displayed as static type if no link is present in the content block's linksCollection */}
          {heading && (!linkLabel || !linkUrl) && (
            <Typography variant="h3">
              {heading}
            </Typography>
          )}

          {/* The subheading is displayed if one is in the content block */}
          {subheading && (
            <Typography gutterBottom variant="subtitle1">
              {subheading}
            </Typography>
          )}

          {/* The richText is displayed if one is in the content block */}
          {richText && <RenderedHtml richText={richText} variant={(!linkLabel || !linkUrl) ? 'body1' : 'body2'} />}

          {/* A link is displayed at the bottom of the card if one is present in the content block's linksCollection */}
          {linkUrl && linkLabel && (
            <CardActions>
              <NavLink url={`/${linkUrl}`} label={linkLabel} />
            </CardActions>
          )}
        </CardContent>
      </CardWrapper>
    </Card>
  );
};

export default Component;
