import colors from './colors';

const theme = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          border: `solid 1px ${colors.componentBorder}`,
          color: colors.black
        }
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: 72,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 64
      },
      '@media (min-width:640px)': {
        minHeight: 72
      }
    }
  }
};

export default theme;
