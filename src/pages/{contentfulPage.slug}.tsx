// src/pages/{contentfulPage.url}.js

import React, { Component, ReactElement } from 'react';
import { graphql } from 'gatsby';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ContentfulPage, ContentfulSection } from '../../types/graphql-types'; // eslint-disable-line import/no-unresolved

// import CardSectionPrimary from '../sections/CardSection/CardSectionPrimary';
// import CardSectionSecondary from '../sections/CardSection/CardSectionSecondary';
// import HeroSection from '../sections/HeroSection/HeroSection';
// import RichTextSection from '../sections/RichTextSection/RichTextSection';
// import MaterialDemoSection from '../sections/MaterialDemoSection/MaterialDemoSection';

// interface SelectedComponents {
//   [key: string]: Component;
// }

// const sectionComponents = {
//   CardSectionSecondary,
//   CardSectionPrimary,
//   HeroSection,
//   RichTextSection,
//   MaterialDemoSection
// };

interface Props {
  data: {
    contentfulPage: ContentfulPage
  }
}

const Page = ({ data: { contentfulPage } }: Props) => {
  const {
    id,
    heading,
    subheading,
    sections
  } = contentfulPage;

  console.log({ contentfulPage });
  console.log({ sections });

  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <main>
      {(heading || subheading) && (
        <Container sx={{ marginTop: '2em' }}>
          {heading && (<Typography variant="h1" align="center" gutterBottom>{heading}</Typography>)}
          {subheading && <Typography variant="subtitle1" align="center" gutterBottom>{subheading}</Typography>}
        </Container>
      )}

      {/* <Container><pre>{JSON.stringify(contentfulPage, null, 2)}</pre></Container> */}

      {sections && sections.map(section => (
        <Container key={section.slug}>
          <Typography variant="h2" gutterBottom>{section.title}</Typography>
          <pre>{JSON.stringify(section, null, 2)}</pre>
        </Container>
      ))}
    </main>
  );
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      title
      slug
      heading
      subheading
      sections {
        ...Sections
      }
    }
  }

  fragment Sections on ContentfulSection {
    id
    title
    slug
    type
    heading
    subheading
    components {
      ...Components
    }
  }

  fragment Components on ContentfulComponent {
    id
    title
    slug
    label
    date
    heading
    subheading
    richText {
      raw
    }
    image {
      ...Image
    }
    links {
      ...Link
    }
    namedStrings {
      ...NamedString
    }
  }

  fragment Asset on ContentfulAsset {
    id
    title
    description
    mimeType
    file {
      url
      fileName
      contentType
      details {
        size
        image {
          width
          height
        }
      }
    }
    size
    url
    width
    height
  }

  fragment Image on ContentfulImage {
    id
    altText
    caption
    asset {
      ...Asset
    }
  }

  fragment Link on ContentfulLink {
    id
    title
    label
    ref {
      ... on ContentfulPage {
        id
        title
        slug
      }
    }
  }

  fragment NamedString on ContentfulNameValuePair {
    id
    name
    value
  }
`;

export default Page;