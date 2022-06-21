import React from 'react';

import { MouseEventHandler } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { Link as GatsbyLink } from 'gatsby';

import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

interface ComponentProps {
  // parentId: string,
  slug: string,
  label: string,
  onClick: MouseEventHandler<HTMLElement>
}

const Component = ({
  label,
  onClick,
  // parentId,
  slug,
}: ComponentProps) => (
  <MenuItem
    component={GatsbyLink}
    // data-event={`${parentId}.${slug}`}
    // id={`${parentId}.${slug}`}
    onClick={onClick}
    to={`/${slug}`}
  >
    <Typography textAlign="center">{label}</Typography>
  </MenuItem>
);

export default Component;
