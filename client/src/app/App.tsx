import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { HomeView } from '../views';
import { appTheme } from '../theme';

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <HomeView />
    </ThemeProvider>
  );
}
