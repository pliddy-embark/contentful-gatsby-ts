import React from 'react';

import CardSection from './CardSection';

import { ContentfulPage, ContentfulSection } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface CardSectionProps {
  // parentId: string,
  section: ContentfulSection
}

// only passing through parentId since this is a wrapper

const CardsSectionSecondary = ({ section }: CardSectionProps) => (
  <CardSection section={section} type="primary" />
);

export default CardsSectionSecondary;
