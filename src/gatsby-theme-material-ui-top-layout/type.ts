import fontFaceOverrides from './fontface';
import colors from './colors';

import {
  baseFontSize,
  fontWeightNormal,
  fontWeightBold,
  fontFamily
} from './variables';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heroTitle: true;
  }
}

const theme = {
  components: {
    MuiCssBaseline: {
      styleOverrides: fontFaceOverrides
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: `${14 / baseFontSize}rem`,
          fontWeight: fontWeightNormal,
          height: 'auto',
          letterSpacing: '.15px',
          lineHeight: 20 / 14,
          paddingTop: 0,
          paddingBottom: 0
        },
        outlined: {
          borderWidth: '1px',
          borderColor: colors.black
        }
      }
    },
    MuiLink: {
      defaultProps: {
        fontSize: baseFontSize,
        fontWeight: fontWeightBold,
        underline: 'hover'
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          heroTitle: 'h1',
          subtitle1: 'p',
          subtitle2: 'p'
        },
      },
      variants: [
        {
          props: { variant: 'heroTitle' },
          style: {
            fontSize: `${60 / baseFontSize}rem`,
            fontWeightBold,
            letterSpacing: '-0.4px',
            lineHeight: 80 / 60
          }
        }
      ]
    }
  },
  typography: {
    fontFamily,
    fontWeightBold,
    body1: {
      fontSize: `${20 / baseFontSize}rem`,
      fontWeight: fontWeightNormal,
      letterSpacing: '.15px',
      lineHeight: 32 / 20
    },
    body2: {
      fontSize: `${16 / baseFontSize}rem`,
      fontWeight: fontWeightNormal,
      letterSpacing: '.15px',
      lineHeight: 24 / 16
    },
    button: {
      fontSize: `${16 / baseFontSize}rem`,
      fontWeight: fontWeightBold,
      letterSpacing: '.15px',
      lineHeight: 20 / 16,
      textTransform: 'none'
    },
    caption: {
      fontSize: `${14 / baseFontSize}rem`,
      fontWeight: fontWeightNormal,
      letterSpacing: '.15px',
      lineHeight: 20 / 14
    },
    h1: {
      fontSize: `${48 / baseFontSize}rem`,
      fontWeight: fontWeightBold,
      letterSpacing: '-0.4px',
      lineHeight: 64 / 48
    },
    h2: {
      fontSize: `${40 / baseFontSize}rem`,
      fontWeight: fontWeightBold,
      letterSpacing: 0,
      lineHeight: 56 / 40
    },
    h3: {
      fontWeight: fontWeightBold,
      fontSize: `${32 / baseFontSize}rem`,
      letterSpacing: 0,
      lineHeight: 48 / 32
    },
    h4: {
      fontWeight: fontWeightBold,
      fontSize: `${26 / baseFontSize}rem`,
      letterSpacing: '.15px',
      lineHeight: 40 / 26
    },
    h5: {
      fontWeight: fontWeightBold,
      fontSize: `${20 / baseFontSize}rem`,
      letterSpacing: '.15px',
      lineHeight: 32 / 20
    },
    h6: {
      fontWeight: fontWeightBold,
      fontSize: `${16 / baseFontSize}rem`,
      letterSpacing: '.15px',
      lineHeight: 24 / 16
    },
    overline: {
      color: colors.textAccent,
      fontWeight: fontWeightNormal,
      fontSize: `${14 / baseFontSize}rem`,
      letterSpacing: '.15px',
      lineHeight: 20 / 14,
      textTransform: 'none'
    },
    subtitle1: {
      color: colors.textAccent,
      fontWeight: fontWeightBold,
      fontSize: `${20 / baseFontSize}rem`,
      letterSpacing: '.15px',
      lineHeight: 32 / 20,
      textTransform: 'none'
    }
  }
};

export default theme;
