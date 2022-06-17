import { createSvgIcon } from '@mui/material/utils';

// uses Material's createSVGIcon; is there a better way?
const ArrowIcon = createSvgIcon(<path
  d="M20.37 11.992 17.836 9.73a1 1.003 0 0 1 1.328-1.5l4.489 4.004a.995.998 0 0 1 .347.76.997 1 0 0 1-.347.76l-4.489 4.004a1 1.003 0 0 1-1.328-1.5l2.534-2.26H1a1 1.003 0 0 1 0-2.007z"
/>, 'Arrow');

export default ArrowIcon;
