import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { Link as GatsbyLink } from 'gatsby';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import { NavData } from 'lib/interfaces';

type NavItem = {
  title: string,
  slug: string
}
type NavData = {
  items: Array<NavItem>
};

interface ComponentProps {
  navData: NavData,
  // parentId: string
}
const NavBar = ({ navData }: ComponentProps) => {
  // const componentId = `${parentId}.navbar`;

  return (
    <Box sx={{
      display: { xs: 'none', md: 'flex' },
      flexGrow: 1,
      justifyContent: 'flex-end'
    }}
    >
      {navData && navData.items.map(({ title, slug }) => (
        // Individual nav links in AppBar
        <Button
          component={GatsbyLink}
          // data-event={`${componentId}.${slug}`}
          // id={`${componentId}.${slug}`}
          key={slug}
          sx={{ my: 2, display: 'block' }}
          to={`/${slug}`}
        >
          {title}
        </Button>
      ))}
    </Box>

  );
};

export default NavBar;
