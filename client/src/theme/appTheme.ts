import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#426b4c' },
    background: { default: '#f7f8f5', paper: '#ffffff' },
  },
  typography: {
    fontFamily: 'Roboto Variable, Roboto, Arial, sans-serif',
  },
  shape: { borderRadius: 12 },
});
