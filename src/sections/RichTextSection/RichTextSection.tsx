import React from 'react';

import Container from '@mui/material/Container';
import RenderedHtml from '../../components/RenderedHtml/RenderedHtml';

import { ContentfulSection, ContentfulComponent } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface ComponentProps {
  // parentId: string,
  section: ContentfulSection
}

const RichTextSection = ({ section }: ComponentProps) => {
  const { components } = section;

  const component = components?.[0] as ContentfulComponent;

  const { richText } = component;

  // const { slug, richText } = componentData;

  // const componentId = `${parentId}-${slug}`;

  return (
    <Container component="section">
      {richText && <RenderedHtml richText={richText} />}
    </Container>
  );
};

export default RichTextSection;
