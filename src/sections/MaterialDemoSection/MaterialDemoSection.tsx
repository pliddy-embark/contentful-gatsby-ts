import React from 'react';

import Container from '@mui/material/Container';

import Alerts from './partials/Alerts';
import Breadcrumbs from './partials/Breadcrumbs';
import Buttons from './partials/Buttons';
import Colors from './partials/Colors';
import Pagination from './partials/Pagination';
import Ratings from './partials/Ratings';
import Form from './partials/Form';

import TextDemoSection from './partials/TextDemo/TextDemo';

import { ContentfulSection } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface ComponentProps {
  // parentId: string,
  section: ContentfulSection
}

const MaterialDemoSection = ({ section }: ComponentProps) => {
  // const componentId = `${parentId}-${contentData.slug}`;

  return (
    <Container component="section">
      <Breadcrumbs />
      {section && <TextDemoSection section={section} />}
      <Buttons />
      <Colors />
      <Alerts />
      <Pagination />
      <Ratings value={4.4} />
      <Form />
    </Container>
  );
};

export default MaterialDemoSection;
