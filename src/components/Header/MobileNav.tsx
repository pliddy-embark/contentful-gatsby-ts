import React, { useState, MouseEvent } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';

import MenuIcon from '@mui/icons-material/Menu';

import MenuItem from './MenuItem';

// import { NavData } from '../../lib/interfaces';

type NavItem = {
  title: string,
  slug: string
}
type NavData = {
  items: Array<NavItem>
};

interface ComponentProps {
  navData: NavData | undefined,
  // parentId: string
}

const MobileNav = ({ navData }: ComponentProps) => {
  // identify anchor element for responsive nav menu
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  // event handlers for responsive nav menu
  const handleOpenNavMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => setAnchorElNav(null);

  // const componentId = `${parentId}.mobile-nav`;

  return (
    <Box sx={{
      flexGrow: 1,
      display: { xs: 'flex', md: 'none' }
    }}
    >
      <IconButton
        aria-label="site navigation"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        component="nav"
        // id={componentId}
        // data-event={componentId}
        onClick={handleOpenNavMenu}
        size="large"
        sx={{ marginLeft: 'auto' }}
      >
        <MenuIcon fontSize="large" color="primary" />
      </IconButton>
      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        id="menu-appbar"
        keepMounted
        onClose={handleCloseNavMenu}
        open={Boolean(anchorElNav)}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {navData && navData?.items?.map(({ title, slug }) => (
          <MenuItem
            key={slug}
            onClick={handleCloseNavMenu}
            // parentId={`${componentId}`}
            slug={slug}
            label={title}
          />
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNav;
