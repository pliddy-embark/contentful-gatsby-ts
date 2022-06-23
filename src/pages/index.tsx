import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { ContentfulPageConnection, ContentfulPage, ContentfulSection } from '../../types/graphql-types'; // eslint-disable-line import/no-unresolved

import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

// import homepageQuery from '../lib/queries/homepageQuery';

interface PageProps {
  data: {
    contentfulPage: ContentfulPage,
    allContentfulPage: ContentfulPageConnection
  }
}

const IndexPage = ({ data: { contentfulPage, allContentfulPage } }: PageProps) => {
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <>
      <Helmet>
        <title>{contentfulPage.title} | embarkvet.com</title>
        <meta name="description" content="This is a sample page to demonstrate Gatsby" />
        {/* To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your <head> element. */}
      </Helmet>
      <Header allPages={allContentfulPage} />
      <Layout pageData={contentfulPage} />
    </>
  );
};

export const data = graphql`
  query homepageQuery {
    allContentfulPage(filter: {node_locale: {eq: "en-US"}, slug:{nin: ["homepage", "error"]}}) {
      nodes {
        id
        title
        slug
      }
    }

    contentfulPage(slug: { eq: "homepage" }) {
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

export default IndexPage;

