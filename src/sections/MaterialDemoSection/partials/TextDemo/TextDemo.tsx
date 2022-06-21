import React from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography, { TypographyTypeMap } from '@mui/material/Typography';

import RenderedHtml from '../../../../components/RenderedHtml/RenderedHtml';

import { Maybe, ContentfulSection, ContentfulNameValuePair } from '../../../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

type VariantMap = {
  heading: TypographyTypeMap["props"]["variant"];
  body: TypographyTypeMap["props"]["variant"];
}

const variants: Array<VariantMap> = [
  { heading: 'heroTitle', body: 'body1' },
  { heading: 'h1', body: 'body1' },
  { heading: 'h2', body: 'body2' },
  { heading: 'h3', body: 'body2' },
  { heading: 'h4', body: 'caption' },
  { heading: 'h5', body: 'subtitle1' },
  { heading: 'h6', body: 'subtitle2' },
];

type GetNamedStringProps = {
  namedStrings: Maybe<ContentfulNameValuePair>[];
  stringName: string
};

const getNamedString = ({namedStrings, stringName}: GetNamedStringProps):string => {
  if (namedStrings) {
    const namedString = namedStrings.find(item => item?.name === stringName);
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

        // console.log({ namedStrings })

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
                    {getNamedString({ namedStrings, stringName: 'buttonText' })}
                  </Typography>
                  <Typography variant="overline" gutterBottom sx={{ mr: 1, display: 'inline-block' }}>
                    {getNamedString({ namedStrings, stringName: 'overlineText' })}
                  </Typography>
                  <Chip label={getNamedString({ namedStrings, stringName: 'chipFilled' })} color="primary" />
                  <Chip label={getNamedString({ namedStrings, stringName: 'chipSecondary' })} color="secondary" />
                  <Chip label={getNamedString({ namedStrings, stringName: 'chipOutlined' })} variant="outlined" />
                </Box>
              )}
            </Box>
          );
        }

        return (
          <Box key={id}>
            {heading && (
              <Typography variant={variants[index].heading} gutterBottom>
                {heading}
              </Typography>
            )}
            {richText && <RenderedHtml richText={richText} variant={variants[index].body} />}
          </Box>
        );
      })}
    </>
  );
};

export default TextDemo;
