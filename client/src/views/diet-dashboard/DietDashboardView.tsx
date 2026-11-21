import { useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ArrowRight, CalendarDays, Droplets, Flame, Plus, Salad, Sparkles } from 'lucide-react';
import { AppSidebar, MealCard, SummaryCard } from '../../components';
import type { MealEntry, MealType } from '../../components';
import { demoMeals, demoNutrition, mealTypes } from './dietDashboard.constants';
import type { NewMealForm, NutritionRowProps } from './dietDashboard.types';

const dateFormatter = new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });

export function DietDashboardView() {
  const [meals, setMeals] = useState(demoMeals);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<NewMealForm>({ name: '', type: 'Desayuno', time: '08:00', note: '' });
  const registeredMeals = useMemo(() => meals.filter((meal) => meal.completed).length, [meals]);

  function toggleMeal(id: string) {
    setMeals((currentMeals) => currentMeals.map((meal) => meal.id === id ? { ...meal, completed: !meal.completed } : meal));
  }

  function updateForm(field: keyof NewMealForm, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value } as NewMealForm));
  }

  function addMeal() {
    const name = form.name.trim();
    if (!name) return;
    const newMeal: MealEntry = { ...form, name, id: `meal-${Date.now()}`, completed: false };
    setMeals((currentMeals) => [...currentMeals, newMeal].sort((first, second) => first.time.localeCompare(second.time)));
    setForm({ name: '', type: 'Desayuno', time: '08:00', note: '' });
    setDialogOpen(false);
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppSidebar />
      <Box component="main" sx={{ flex: 1, minWidth: 0, px: { xs: 2, sm: 3, xl: 5 }, pt: { xs: 2.5, sm: 4 }, pb: { xs: 11, lg: 5 } }}>
        <Box sx={{ width: '100%', maxWidth: 1440, mx: 'auto' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: { xs: 3, md: 4 } }}>
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, alignItems: 'center', gap: 1, color: 'primary.main' }}>
              <Salad size={23} strokeWidth={2.4} />
              <Typography fontWeight={750}>Mi Nutricionista</Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <Typography variant="body2" color="text.secondary" textTransform="capitalize">{dateFormatter.format(new Date())}</Typography>
            </Box>
            <Stack direction="row" alignItems="center" spacing={1}>
              <CalendarDays size={17} color="#68766c" />
              <Typography variant="body2" fontWeight={600}>Mi día</Typography>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'stretch', md: 'flex-end' }} justifyContent="space-between" spacing={2.5} sx={{ mb: 3.5 }}>
            <Box>
              <Typography variant="overline" color="primary.main" fontWeight={750} letterSpacing={1.2} sx={{ textTransform: 'uppercase' }}>{dateFormatter.format(new Date())}</Typography>
              <Typography component="h1" variant="h3" fontWeight={750} letterSpacing="-.045em" sx={{ mt: 0.25, fontSize: { xs: 31, sm: 40 } }}>
                Tu día, a tu manera.
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 0.75 }}>Un vistazo amable a lo que has comido y lo que queda por disfrutar.</Typography>
            </Box>
            <Button onClick={() => setDialogOpen(true)} variant="contained" startIcon={<Plus size={18} />} sx={{ alignSelf: { xs: 'flex-start', md: 'auto' }, px: 2.25, py: 1.25 }}>
              Añadir comida
            </Button>
          </Stack>

          <Alert
            icon={<Sparkles size={17} />}
            severity="info"
            sx={{ mb: 2.5, borderRadius: 2.5, bgcolor: '#edf3eb', color: '#49604c', '& .MuiAlert-icon': { color: '#68896a', alignItems: 'center' } }}
          >
            <Typography variant="body2"><strong>Vista de muestra.</strong> El registro es temporal y no requiere iniciar sesión. Personalizaremos comidas y objetivos más adelante.</Typography>
          </Alert>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 3.5, overflowX: { xs: 'auto', sm: 'visible' } }}>
            <SummaryCard label="Comidas registradas" value={`${registeredMeals} de ${meals.length}`} detail="Hoy, hasta ahora" icon={<Salad size={19} />} tone="green" />
            <SummaryCard label="Energía registrada" value={demoNutrition.energy} detail="Dato de ejemplo" icon={<Flame size={19} />} tone="peach" />
            <SummaryCard label="Agua registrada" value={demoNutrition.water} detail="Dato de ejemplo" icon={<Droplets size={19} />} tone="lavender" />
          </Stack>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', xl: 'minmax(0, 1.55fr) minmax(300px, .8fr)' }, gap: 2.5, alignItems: 'start' }}>
            <Paper elevation={0} sx={{ p: { xs: 2, sm: 2.75 }, border: '1px solid', borderColor: 'divider', borderRadius: 4 }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2.25 }}>
                <Box>
                  <Typography variant="h6" fontWeight={750}>Comidas de hoy</Typography>
                  <Typography variant="body2" color="text.secondary">Marca cada comida cuando la hayas registrado.</Typography>
                </Box>
                <Button color="primary" endIcon={<ArrowRight size={16} />} sx={{ display: { xs: 'none', sm: 'inline-flex' }, fontWeight: 700 }}>Ver plan</Button>
              </Stack>
              <Stack spacing={1.25}>
                {meals.map((meal) => <MealCard key={meal.id} meal={meal} onToggle={toggleMeal} />)}
              </Stack>
              <Button onClick={() => setDialogOpen(true)} variant="outlined" startIcon={<Plus size={17} />} fullWidth sx={{ mt: 1.75, py: 1.1, borderStyle: 'dashed' }}>
                Añadir otra comida
              </Button>
            </Paper>

            <Stack spacing={2.5}>
              <Paper elevation={0} sx={{ p: 2.75, border: '1px solid', borderColor: 'divider', borderRadius: 4 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box>
                    <Typography variant="h6" fontWeight={750}>Pequeños datos</Typography>
                    <Typography variant="body2" color="text.secondary">Registro orientativo de hoy</Typography>
                  </Box>
                  <Box sx={{ width: 38, height: 38, display: 'grid', placeItems: 'center', bgcolor: '#f4efe4', color: '#9b7b45', borderRadius: 2.5 }}><Sparkles size={19} /></Box>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Stack spacing={2}>
                  <NutritionRow label="Proteína" value={demoNutrition.protein} color="#7d9c79" />
                  <NutritionRow label="Hidratos" value="142 g" color="#d5a46e" />
                  <NutritionRow label="Grasas" value="39 g" color="#b695c5" />
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2.25, lineHeight: 1.6 }}>
                  Valores inventados para mostrar la interfaz; tus datos y referencias se configurarán después.
                </Typography>
              </Paper>

              <Paper elevation={0} sx={{ p: 2.75, borderRadius: 4, bgcolor: '#e7efe4', color: '#274b37' }}>
                <Typography variant="overline" fontWeight={750} letterSpacing={1}>RECORDATORIO SUAVE</Typography>
                <Typography variant="h6" fontWeight={750} sx={{ mt: 0.75 }}>Cada día es distinto.</Typography>
                <Typography variant="body2" sx={{ mt: 0.75, color: '#57735d', lineHeight: 1.7 }}>
                  Este espacio será tuyo: podremos adaptar el registro a tus horarios, gustos y objetivos.
                </Typography>
              </Paper>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle fontWeight={750}>Añadir una comida</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <TextField autoFocus required label="¿Qué has comido?" placeholder="Ej. Tostada con aguacate" value={form.name} onChange={(event) => updateForm('name', event.target.value)} />
            <TextField select label="Momento del día" value={form.type} onChange={(event) => updateForm('type', event.target.value as MealType)}>
              {mealTypes.map((type) => <MenuItem key={type} value={type}>{type}</MenuItem>)}
            </TextField>
            <TextField type="time" label="Hora" value={form.time} onChange={(event) => updateForm('time', event.target.value)} slotProps={{ inputLabel: { shrink: true } }} />
            <TextField label="Nota (opcional)" value={form.note} onChange={(event) => updateForm('note', event.target.value)} />
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2.5 }}>
          <Button onClick={() => setDialogOpen(false)} color="inherit">Cancelar</Button>
          <Button onClick={addMeal} variant="contained" disabled={!form.name.trim()}>Guardar comida</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function NutritionRow({ label, value, color }: NutritionRowProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.25}>
      <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: color }} />
      <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={700}>{value}</Typography>
    </Stack>
  );
}
