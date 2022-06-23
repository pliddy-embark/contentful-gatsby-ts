import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ContentfulPage } from '../../../types/graphql-types'; // eslint-disable-line import/no-unresolved

interface ComponentProps {
  navData: ContentfulPage[],
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
      {navData && navData?.map((node) => {
        const { slug, title } = node ?? {};

        return (
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
        );
      })}
    </Box>

  );
};

export default NavBar;
