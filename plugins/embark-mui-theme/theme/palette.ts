import colors from './colors';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
  }

  interface SimplePaletteColorOptions {
    light?: string;
  }

  interface SimplePaletteColorOptions {
    dark?: string;
  }

  interface SimplePaletteColorOptions {
    contrastText?: string;
  }
}

const theme = {
  palette: {
    common: {
      black: colors.black,
      white: colors.white
    },
    primary: {
      main: colors.primaryMain,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.primaryContrast
    },
    secondary: {
      main: colors.secondaryMain,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: colors.secondaryContrast
    },
    tertiary: {
      main: colors.tertiaryMain,
      light: colors.tertiaryLight,
      dark: colors.tertiaryDark,
      contrastText: colors.tertiaryContrast
    },
    error: {
      main: colors.errorMain,
      light: colors.errorLight,
      dark: colors.errorDark,
      contrastText: colors.errorContrast
    },
    warning: {
      main: colors.warningMain,
      light: colors.warningLight,
      dark: colors.warningDark,
      contrastText: colors.warningContrast
    },
    info: {
      main: colors.infoMain,
      light: colors.infoLight,
      dark: colors.infoDark,
      contrastText: colors.infoContrast
    },
    success: {
      main: colors.successMain,
      light: colors.successLight,
      dark: colors.successDark,
      contrastText: colors.successContrast
    },
    text: {
      // TODO: understand where these colors are used
      // and define values
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      disabled: colors.textDisabled
    },
    divider: colors.divider
  }
};

export default theme;
