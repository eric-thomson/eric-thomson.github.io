import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&:nth-of-type(odd)': {
              backgroundColor: '#f3f3f3'
            },
            '&:last-child td, &:last-child th': {
              border: 0,
            },
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            backgroundColor: '#023E8A',
            color: '#fff'
          },
          body: {
            fontSize: 14
          }
        }
      },
    },
    palette: {
      primary: {
          main: '#023E8A'
      },
      secondary: {
          main: '#90E0EF'
      },
      success: {
          main: '#80FFDB'
      },
      warning: {
          main: '#FFB703'
      }, 
      error: {
          main: '#A31621'
      }
    }
  });

  export default theme;