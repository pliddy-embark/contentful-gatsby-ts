import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { ContentfulPageConnection, ContentfulPage, ContentfulSection } from '../../types/graphql-types'; // eslint-disable-line import/no-unresolved

import Header from '../components/Header/Header';
import Layout from '../components/Layout';

import pageQuery from '../lib/queries/pageQuery';

interface PageProps {
  data: {
    contentfulPage: ContentfulPage,
    allContentfulPage: ContentfulPageConnection
  }
}

const Page = ({ data: { contentfulPage, allContentfulPage } }: PageProps) => {
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <>
      <Header allPages={allContentfulPage} />
      <Layout pageData={contentfulPage} />
    </>
  );
};

export const data = graphql`
  query pageQuery($id: String) {
    allContentfulPage(filter: {node_locale: {eq: "en-US"}, slug:{nin: ["homepage", "error"]}}) {
      nodes {
        id
        title
        slug
      }
    }

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