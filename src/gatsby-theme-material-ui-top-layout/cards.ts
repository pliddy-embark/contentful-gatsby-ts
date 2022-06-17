import { createBreakpoints } from '@mui/system';
import { defaultBorderRadius } from './variables';
import colors from './colors';

const breakpoints = createBreakpoints({});

const theme = {
  components: {
    MuiCard: {
      defaultProps: {
        border: 0,
        elevation: 0,
        height: '100%'
      },
      styleOverrides: {
        // sets root styles for base card
        root: {
          borderRadius: `
            ${defaultBorderRadius}em
            ${defaultBorderRadius}em
            0 0
          `,
          display: 'flex',
          flexDirection: 'column',
          // should be defined by container not card?
          marginBottom: '2em',
          // set flex behavior for Box when card is static
          '& .static': {
            display: 'flex',
            flexDirection: 'column'
          },
          // overrides base styles when class 'single' is applied to a full-width card
          '&.single': {
            [breakpoints.up('md')]: {
              borderRadius: 0,
              flexDirection: 'row-reverse'
            },
            // set flex direction for Box when card is static
            '& .static': {
              flexDirection: 'row-reverse',
              [breakpoints.down('md')]: {
                flexDirection: 'column'
              }
            },
            '& .MuiCardMedia-media': {
              maxWidth: '48.6%',
              minHeight: '26.25em',
              [breakpoints.down('md')]: {
                maxHeight: 'inherit',
                maxWidth: '100%',
              }
            },
            '& .MuiCardContent-root': {
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'center',
              marginRight: '-3em',
              marginTop: 0,
              paddingBottom: 0,
              paddingRight: '6em',
              paddingTop: 0,
              '&:last-child': {
                paddingBottom: 0
              },
              [breakpoints.down('md')]: {
                marginRight: 0,
                paddingBottom: 0,
                paddingRight: 0,
                paddingTop: '1em'
              }
            },
            '& .MuiCardActionArea-root': {
              flexDirection: 'row-reverse',
              [breakpoints.down('md')]: {
                flexDirection: 'column'
              }
            },
          },
          // override root settngs when 'secondary' brand style is applied
          '&.secondary': {
            backgroundColor: colors.secondaryMain,
            borderRadius: 0,
            '& .MuiCardContent-root': {
              backgroundColor: colors.secondaryMain,
              borderRadius: '1.5em 1.5em 0 0',
              marginTop: '-3em',
              paddingBottom: '3.75em',
              paddingLeft: '3em',
              paddingRight: '3em',
              paddingTop: '3.75em',
              '&:last-child': {
                paddingBottom: '3.75em'
              }
            },
            '& .MuiCardMedia-media': {
              borderRadius: 0
            },
            // override root secondary settings when card is only card in a row
            '&.single': {
              '& .MuiCardContent-root': {
                borderRadius: '0 1.5em 1.5em 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginRight: '-4em',
                marginTop: 0,
                paddingLeft: '3.75em',
                paddingRight: '3.75em',
                [breakpoints.down('md')]: {
                  borderRadius: '1.5em 1.5em 0 0',
                  marginTop: '-3em',
                  maxWidth: '100%',
                  paddingTop: '3.75em',
                }
              },
              '& .MuiCardMedia-media': {
                maxWidth: '58%',
                [breakpoints.down('md')]: {
                  maxHeight: 'inherit',
                  maxWidth: '100%',
                }
              }
            }
          }
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          paddingLeft: 0
        }
      }
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column'
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: '100%'
        },
        media: {
          borderRadius: `
            ${defaultBorderRadius}em
            ${defaultBorderRadius}em
            ${defaultBorderRadius}em
            ${defaultBorderRadius / 3}em`,
        },
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    }
  }
};

export default theme;
