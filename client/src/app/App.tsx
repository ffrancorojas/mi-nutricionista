import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { DietDashboardView } from '../views';
import { appTheme } from '../theme';

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <DietDashboardView />
    </ThemeProvider>
  );
}
