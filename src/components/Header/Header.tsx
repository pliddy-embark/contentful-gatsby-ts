import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import Logo from './Logo';
import NavBar from './NavBar';
import MobileNav from './MobileNav';

import { ContentfulPageConnection } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

import theme from '../../gatsby-theme-material-ui-top-layout/theme';

type NavItem = {
  title: string,
  slug: string
}

type HeaderProps = {
  allPages: ContentfulPageConnection
};

const Header = ({ allPages: { nodes: navData } }: HeaderProps) => (
  <Box sx={{ height: `${theme.mixins.toolbar.minHeight}px` }}>
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Clickable Embark logo */}
          <Logo url="/" />
          {/* Responsive menu with icon, hidden on md and above */}
          <MobileNav navData={navData} />
          {/* links in menu bar visible on md and above */}
          <NavBar navData={navData} />
        </Toolbar>
      </Container>
    </AppBar>
  </Box>
);

export default Header;
