import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#315d45', dark: '#214632', light: '#5c8264' },
    secondary: { main: '#d9956d' },
    background: { default: '#f7f7f2', paper: '#ffffff' },
    text: { primary: '#202a24', secondary: '#6d786f' },
  },
  typography: {
    fontFamily: 'Roboto Variable, Roboto, Arial, sans-serif',
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, textTransform: 'none', fontWeight: 700, boxShadow: 'none' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
});
