import { deepmerge } from '@mui/utils';
import {
  createTheme,
  responsiveFontSizes
} from '@mui/material/styles';

import alertTheme from './alerts';
import buttonTheme from './buttons';
import cardsTheme from './cards';
import inputsTheme from './inputs';
import navbarTheme from './navbar';
import paletteTheme from './palette';
import shapeTheme from './shape';
import typeTheme from './type';

let build = createTheme(deepmerge(paletteTheme, typeTheme));
build = createTheme(deepmerge(build, shapeTheme));
build = createTheme(deepmerge(build, navbarTheme));
build = createTheme(deepmerge(build, buttonTheme));
build = createTheme(deepmerge(build, inputsTheme));
build = createTheme(deepmerge(build, alertTheme));
build = createTheme(deepmerge(build, cardsTheme));

const theme = responsiveFontSizes(build);

export default theme;
