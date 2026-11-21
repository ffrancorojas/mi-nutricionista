import { Box, Chip, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Check, Circle, MoreHorizontal } from 'lucide-react';
import type { MealCardProps, MealEntry } from './MealCard.types';

const mealColors: Record<MealEntry['type'], string> = {
  Desayuno: '#dcebe0',
  Comida: '#f6e6d8',
  Merienda: '#eee6f3',
  Cena: '#e0e9f2',
};

export function MealCard({ meal, onToggle }: MealCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.75,
        p: 2,
        border: '1px solid',
        borderColor: meal.completed ? 'transparent' : 'divider',
        bgcolor: meal.completed ? '#f6f8f3' : 'background.paper',
        borderRadius: 3,
        transition: 'border-color .2s, background-color .2s',
      }}
    >
      <IconButton
        aria-label={meal.completed ? 'Marcar como pendiente' : 'Marcar como registrada'}
        onClick={() => onToggle(meal.id)}
        sx={{ color: meal.completed ? 'primary.main' : 'text.disabled', p: 0.5 }}
      >
        {meal.completed ? <Check size={20} strokeWidth={2.7} /> : <Circle size={20} />}
      </IconButton>
      <Box sx={{ width: 42, height: 42, display: 'grid', placeItems: 'center', bgcolor: mealColors[meal.type], borderRadius: 2.5, flexShrink: 0 }}>
        <Typography aria-hidden sx={{ fontSize: 21 }}>{meal.type === 'Desayuno' ? '☀️' : meal.type === 'Comida' ? '🥗' : meal.type === 'Merienda' ? '🍎' : '🌙'}</Typography>
      </Box>
      <Box sx={{ minWidth: 0, flex: 1 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 0.25 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={650}>{meal.type}</Typography>
          <Typography variant="caption" color="text.disabled">·</Typography>
          <Typography variant="caption" color="text.secondary">{meal.time}</Typography>
        </Stack>
        <Typography fontWeight={650} noWrap sx={{ fontSize: 14.5, textDecoration: meal.completed ? 'line-through' : 'none', color: meal.completed ? 'text.secondary' : 'text.primary' }}>
          {meal.name}
        </Typography>
        <Typography variant="caption" color="text.secondary" noWrap>{meal.note}</Typography>
      </Box>
      <Chip
        label={meal.completed ? 'Registrada' : 'Planificada'}
        size="small"
        sx={{ display: { xs: 'none', sm: 'flex' }, bgcolor: meal.completed ? '#e5efe5' : '#f5f0e7', color: meal.completed ? 'primary.dark' : '#887452', fontWeight: 650, fontSize: 11 }}
      />
      <IconButton aria-label={`Más opciones para ${meal.type.toLowerCase()}`} size="small" sx={{ color: 'text.disabled' }}>
        <MoreHorizontal size={19} />
      </IconButton>
    </Paper>
  );
}
