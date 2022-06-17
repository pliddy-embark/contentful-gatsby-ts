import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

import RenderedHtml from '../../../../components/RenderedHtml/RenderedHtml';

import { ContentfulSection, ContentfulComponent, ContentfulNameValuePair } from '../../../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface VariantMap {
  heading: string,
  body: string
}

const variants: Array<VariantMap> = [
  { heading: 'heroTitle', body: 'body1' },
  { heading: 'h1', body: 'body1' },
  { heading: 'h2', body: 'body2' },
  { heading: 'h3', body: 'body2' },
  { heading: 'h4', body: 'caption' },
  { heading: 'h5', body: 'subtitle1' },
  { heading: 'h6', body: 'subtitle2' }
];

const getNamedString = (namedStrings: ContentfulNameValuePair[], name: string):string => {
  if (namedStrings) {
    const namedString = namedStrings.find(item => item.name === name);
    if (namedString && namedString.value) return namedString.value;
  }
  return '';
};

interface ComponentProps {
  // parentId: string,
  section: ContentfulSection
}

const TextDemo = ({
  // parentId,
  section: {
    // slug,
    components
  }
}: ComponentProps) => {
  // const componentId = `${parentId}-${slug}`;

  return (
    <>
      {components?.map((component, index, collection) => {
        const {
          id,
          heading,
          namedStrings,
          richText
        } = component ?? {};

        console.log({ namedStrings })

        if (index === collection.length - 1) {
          return (
            <Box key={id}>
              {heading && (
                <Typography variant="h2" gutterBottom mt={4}>
                  {heading}
                </Typography>
              )}
              {namedStrings && (
                <Box sx={{ '& > *': { marginRight: 1 } }}>
                  <Typography variant="button" gutterBottom sx={{ mr: 1, display: 'inline-block' }}>
                    {getNamedString(namedStrings, 'buttonText')}
                  </Typography>
                  <Typography variant="overline" gutterBottom sx={{ mr: 1, display: 'inline-block' }}>
                    {getNamedString(namedStrings, 'overlineText')}
                  </Typography>
                  <Chip label={getNamedString(namedStrings, 'chipFilled')} color="primary" />
                  <Chip label={getNamedString(namedStrings, 'chipSecondary')} color="secondary" />
                  <Chip label={getNamedString(namedStrings, 'chipOutlined')} variant="outlined" />
                </Box>
              )}
            </Box>
          );
        }

        return (
          <Box key={id}>
            {heading && (
              <Typography variant={variants[index].heading as Variant} gutterBottom>
                {heading}
              </Typography>
            )}
            {richText && <RenderedHtml richText={richText} variant={variants[index].body as Variant} />}
          </Box>
        );
      })}
    </>
  );
};

export default TextDemo;
