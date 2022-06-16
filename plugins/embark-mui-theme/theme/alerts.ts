import colors from './colors';

const theme = {
  components: {
    MuiAlert: {
      styleOverrides: {
        filled: {
          fontWeight: 600
        },
        filledWarning: {
          color: colors.black
        },
        standardError: {
          backgroundColor: colors.errorBackground,
          color: colors.errorContent
        },
        standardWarning: {
          backgroundColor: colors.warningBackground,
          color: colors.warningContent
        },
        standardInfo: {
          backgroundColor: colors.infoBackground,
          color: colors.infoContent
        },
        standardSuccess: {
          backgroundColor: colors.successBackground,
          color: colors.successContent
        },
        outlinedError: {
          color: colors.errorContent
        },
        outlinedInfo: {
          color: colors.infoContent
        },
        outlinedSuccess: {
          color: colors.successContent
        },
        outlinedWarning: {
          color: colors.warningContent
        }
      }
    }
  }
};

export default theme;
