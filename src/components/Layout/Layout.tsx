import React from 'react';
import loadable from '@loadable/component';

// const Container = loadable(() => import('@mui/material/Container'));
// const Typography = loadable(() => import('@mui/material/Typography'));

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const CardSectionPrimary = loadable(() => import('../../sections/CardSection/CardSectionPrimary'));
const CardSectionSecondary = loadable(() => import('../../sections/CardSection/CardSectionSecondary'));
const HeroSection = loadable(() => import('../../sections/HeroSection/HeroSection'));
const RichTextSection = loadable(() => import('../../sections/RichTextSection/RichTextSection'));
const MaterialDemoSection = loadable(() => import('../../sections/MaterialDemoSection/MaterialDemoSection'));

// import CardSectionPrimary from '../../sections/CardSection/CardSectionPrimary';
// import CardSectionSecondary from '../../sections/CardSection/CardSectionSecondary';
// import HeroSection from '../../sections/HeroSection/HeroSection';
// import RichTextSection from '../../sections/RichTextSection/RichTextSection';
// import MaterialDemoSection from '../../sections/MaterialDemoSection/MaterialDemoSection';

import { ContentfulPage, ContentfulSection } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface SampleSectionProps {
  section: ContentfulSection
}

const SampleSection = ({ section }: SampleSectionProps) => (
  <Container key={section.slug}>
    <Typography variant="h2" gutterBottom>{section.title}</Typography>
    <pre>{JSON.stringify(section, null, 2)}</pre>
  </Container>
);

interface LayoutProps {
  pageData: ContentfulPage,
}

const Layout = ({ pageData }: LayoutProps) => {
  const {
    id,
    heading,
    subheading,
    sections
  } = pageData ?? {};

  return (
    <main>
      {(heading || subheading) && (
        <Container sx={{ marginTop: '2em' }}>
          {heading && (<Typography variant="h1" align="center" gutterBottom>{heading}</Typography>)}
          {subheading && <Typography variant="subtitle1" align="center" gutterBottom>{subheading}</Typography>}
        </Container>
      )}

      {/* TODO: make this a switch */}
      {sections && sections?.map((section) => {
        if (section?.type === 'HeroSection') {
          return (<HeroSection key={section?.slug} section={section} />)
        }

        if (section?.type === 'RichTextSection') {
          return (<RichTextSection key={section?.slug} section={section} />)
        }

        if (section?.type === 'MaterialDemoSection') {
          return (<MaterialDemoSection key={section?.slug} section={section} />)
        }

        if (section?.type === 'CardSectionPrimary') {
          return (<CardSectionPrimary key={section?.slug} section={section} />)
        }

        if (section?.type === 'CardSectionSecondary') {
          return (<CardSectionSecondary key={section?.slug} section={section} />)
        }

        return section && (<SampleSection key={section?.slug} section={section} />)
        }
      )}
    </main>
  );
};

export default Layout;