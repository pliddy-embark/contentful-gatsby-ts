import React, { ReactNode } from 'react';

// import { Variant } from '@mui/material/styles/createTypography';

import Typography, { TypographyTypeMap } from '@mui/material/Typography';

import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer';

import {
  BLOCKS,
  MARKS
} from '@contentful/rich-text-types';

import { ContentfulComponentRichText } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface RenderedHtmlProps {
  richText: ContentfulComponentRichText,
  variant?: TypographyTypeMap["props"]["variant"] | undefined
}

interface BlockProps {
  children: ReactNode | ReactNode[],
  variant?: TypographyTypeMap["props"]["variant"] | undefined
}

const P = ({ children, variant }: BlockProps) => <Typography variant={variant} paragraph>{children}</Typography>;
const H1 = ({ children }: BlockProps) => <Typography variant="h1">{children}</Typography>;
const H2 = ({ children }: BlockProps) => <Typography variant="h2">{children}</Typography>;
const H3 = ({ children }: BlockProps) => <Typography variant="h3">{children}</Typography>;
const H4 = ({ children }: BlockProps) => <Typography variant="h4">{children}</Typography>;
const H5 = ({ children }: BlockProps) => <Typography variant="h5">{children}</Typography>;
const H6 = ({ children }: BlockProps) => <Typography variant="h6">{children}</Typography>;

const options = (variant: TypographyTypeMap["props"]["variant"]): Options => ({
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => <P variant={variant}>{children}</P>,
    [BLOCKS.HEADING_1]: (_node, children) => <H1>{children}</H1>,
    [BLOCKS.HEADING_2]: (_node, children) => <H2>{children}</H2>,
    [BLOCKS.HEADING_3]: (_node, children) => <H3>{children}</H3>,
    [BLOCKS.HEADING_4]: (_node, children) => <H4>{children}</H4>,
    [BLOCKS.HEADING_5]: (_node, children) => <H5>{children}</H5>,
    [BLOCKS.HEADING_6]: (_node, children) => <H6>{children}</H6>,
  }
});

export const RenderedHtml = ({
  richText,
  variant = 'body2'
}: RenderedHtmlProps) => {
  const { raw } = richText ?? {};

  return (
  <>
    {documentToReactComponents(JSON.parse(raw as string), options(variant))}
  </>
)};

export default RenderedHtml;
