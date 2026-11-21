import { Box, Container, Paper, Typography } from '@mui/material';

export function HomeView() {
  return (
    <Container maxWidth="md">
      <Box component="main" sx={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', py: 4 }}>
        <Paper component="section" elevation={0} sx={{ width: '100%', p: { xs: 3, sm: 5 }, borderRadius: 4 }}>
          <Typography component="p" color="primary.main" fontWeight={700} variant="overline">
            Tu espacio personal
          </Typography>
          <Typography component="h1" variant="h3" fontWeight={700} gutterBottom>
            Mi Nutricionista
          </Typography>
          <Typography color="text.secondary" variant="body1">
            Estamos preparando una forma sencilla de acompañar tus objetivos de nutrición.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
