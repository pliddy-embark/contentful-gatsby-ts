import colors from './colors';

const theme = {
  components: {
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          backgroundColor: colors.secondaryBrand,
          color: colors.black,
          '&:hover': {
            backgroundColor: colors.secondaryLight
          }
        },
        outlined: {
          borderColor: colors.black,
          borderWidth: '2px',
          color: colors.black,
          '&:hover': {
            borderWidth: '2px'
          }
        },
        sizeSmall: {
          borderRadius: '1rem',
          padding: '7px 12px 5px'
        },
        sizeMedium: {
          borderRadius: '44px',
          padding: '11px 20px 9px'
        },
        sizeLarge: {
          borderRadius: '60px',
          fontSize: '1.25rem',
          padding: '18px 36px 17px'
        }
      }
    }
  }
};

export default theme;
