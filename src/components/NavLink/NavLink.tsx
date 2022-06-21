import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Link from '@mui/material/Link';
import ArrowIcon from '../../assets/icons/ArrowIcon';

import slugify from '../../lib/strings';

interface NavLinkProps {
  url: string,
  label: string,
  // parentId: string
}
const NavLink = ({ url, label }: NavLinkProps) => (
  <Link
    component={GatsbyLink}
    // data-event={`${parentId}.${slugify(label)}-link`}
    // id={`${parentId}.${slugify(label)}-link`}
    sx={{ display: 'inline-flex' }}
    to={url}
  >
    {label}
    <ArrowIcon sx={{ ml: 1 }} />
  </Link>
);

export default NavLink;
