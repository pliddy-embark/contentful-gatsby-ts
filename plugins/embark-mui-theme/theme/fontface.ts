import GilroyRegularOtf from '/src/fonts/Gilroy-Regular.otf';
import GilroyRegularWoff from '/src/fonts/Gilroy-Regular.woff';
import GilroyRegularWoff2 from '/src/fonts/Gilroy-Regular.woff2';

import GilroyRegularItalicWoff from '/src/fonts/Gilroy-RegularItalic.woff';
import GilroyRegularItalicWoff2 from '/src/fonts/Gilroy-RegularItalic.woff2';

import GilroySemiBoldWoff from '/src/fonts/Gilroy-SemiBold.woff';
import GilroySemiBoldWoff2 from '/src/fonts/Gilroy-SemiBold.woff2';

import GilroySemiBoldItalicWoff from '/src/fonts/Gilroy-SemiBoldItalic.woff';
import GilroySemiBoldItalicWoff2 from '/src/fonts/Gilroy-SemiBoldItalic.woff2';

const Gilroy = `
  font-display: swap;
  font-family: 'Gilroy';
  font-weight: 400;
  src: url(${GilroyRegularOtf}) format("otf"),url(${GilroyRegularWoff}) format("woff"), url(${GilroyRegularWoff2}) format("woff2")
`;

const GilroyItalic = `
  font-display: swap;
  font-family: 'Gilroy';
  font-style: italic;
  font-weight: 400;
  src: url(${GilroyRegularItalicWoff}) format("woff"), url(${GilroyRegularItalicWoff2}) format("woff2")
`;

const GilroySemiBold = `
  font-display: swap;
  font-family: 'Gilroy';
  font-weight: 600;
  src: url(${GilroySemiBoldWoff}) format("woff"), url(${GilroySemiBoldWoff2}) format("woff2")
`;

const GilroySemiBoldItalic = `
  font-display: swap;
  font-family: 'Gilroy';
  font-style: italic;
  font-weight: 600;
  src: url(${GilroySemiBoldItalicWoff}) format("woff"), url(${GilroySemiBoldItalicWoff2}) format("woff2")
`;

const fontFace = `
  @font-face {${Gilroy}}
  @font-face {${GilroyItalic}}
  @font-face {${GilroySemiBold}}
  @font-face {${GilroySemiBoldItalic}}
`;

export default fontFace;
