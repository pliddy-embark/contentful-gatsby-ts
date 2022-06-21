import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import Logo from './Logo';
import NavBar from './NavBar';
import MobileNav from './MobileNav';

// import { useAppContext } from 'context/AppContext';

import theme from '../../gatsby-theme-material-ui-top-layout/theme';

type NavItem = {
  title: string,
  slug: string
}
type NavData = {
  items: Array<NavItem>
};

const Header = () => {
  // const { navData } = useAppContext();
  const navData: NavData = { items: [] };

  const componentId = 'header';

  return (
    <>
      <AppBar position="fixed" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Clickable Embark logo */}
            <Logo parentId={componentId} url="/" />
            {/* Responsive menu with icon, hidden on md and above */}
            <MobileNav navData={navData} />
            {/* links in menu bar visible on md and above */}
            <NavBar navData={navData} />
          </Toolbar>
        </Container>
      </AppBar>

      {/* div for positioning body with fixed nav */}
      <Box sx={{ height: `${theme.mixins.toolbar.minHeight}px` }} />
    </>
  );
};

export default Header;