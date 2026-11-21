import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { ArrowLeft, Flame, Sparkles } from 'lucide-react';
import type { CalorieEstimationViewProps } from './CalorieEstimationView.types';

export function CalorieEstimationView({ onBack }: CalorieEstimationViewProps) {
  return (
    <Stack spacing={3} sx={{ maxWidth: 900, mx: 'auto' }}>
      <Box>
        <Typography variant="overline" color="primary.main" fontWeight={750} letterSpacing={1.2}>
          HERRAMIENTAS
        </Typography>
        <Typography component="h1" variant="h3" fontWeight={750} letterSpacing="-.045em" sx={{ mt: 0.25, fontSize: { xs: 30, sm: 40 } }}>
          Estimación de consumo de calorías
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 0.75, maxWidth: 660 }}>
          Una referencia para conocer mejor tus necesidades energéticas diarias.
        </Typography>
      </Box>

      <Paper elevation={0} sx={{ p: { xs: 3, sm: 5 }, border: '1px solid', borderColor: 'divider', borderRadius: 4 }}>
        <Box sx={{ width: 52, height: 52, display: 'grid', placeItems: 'center', bgcolor: '#f8e8dc', color: '#a7653f', borderRadius: 3 }}>
          <Flame size={25} />
        </Box>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2.5 }}>
          <Sparkles size={16} color="#9b7b45" />
          <Typography variant="overline" fontWeight={750} letterSpacing={1} color="text.secondary">PRÓXIMAMENTE</Typography>
        </Stack>
        <Typography variant="h5" fontWeight={750} sx={{ mt: 0.75 }}>Prepararemos tu estimación</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 620, lineHeight: 1.75 }}>
          En el siguiente paso definiremos qué información quieres introducir y cómo mostrar una estimación clara. Todavía no calculamos ni recomendamos un objetivo personal.
        </Typography>
        <Button onClick={onBack} variant="outlined" startIcon={<ArrowLeft size={17} />} sx={{ mt: 3 }}>
          Volver a mi día
        </Button>
      </Paper>
    </Stack>
  );
}
