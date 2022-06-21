import React from 'react';

// import { Link as RouterLink } from 'react-router-dom';
import { Link as GatsbyLink } from 'gatsby';

import Box from '@mui/material/Box';

import LogoSvg from './LogoSvg';

interface ComponentProps {
  color?: string,
  // parentId: string,
  url?: string
}

// NOTE: fixed sizes on logo are keeping it from re-sizing,
//       so AppBar doesn't re-size when it becomes responsive

const Logo = ({ color, url }: ComponentProps) => (
  <GatsbyLink
    // data-event={`${parentId}.logo`}
    // id={`${parentId}.logo`}
    to={url || ''}
  >
    <Box>
      <LogoSvg
        color={color}
        // data-event={`${parentId}.logo`}
        height="2.625rem"
        width="10.75rem"
      />
    </Box>
  </GatsbyLink>
);

export default Logo;
