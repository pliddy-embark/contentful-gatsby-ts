const theme = {
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '32px'
        },
        notchedOutline: {
          marginLeft: '-12px',
          '& legend': {
            marginLeft: '12px'
          }
        }
      }
    }
  }
};

export default theme;
