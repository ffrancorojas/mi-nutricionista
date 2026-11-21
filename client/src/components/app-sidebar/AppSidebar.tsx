import { Box, Chip, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Activity, CalendarDays, ClipboardList, Flame, Leaf, Sparkles, X } from 'lucide-react';
import type { AppSidebarProps, NavigationKey } from './AppSidebar.types';

const navigationItems = [
  { key: 'today', label: 'Mi día', icon: ClipboardList, ready: true },
  { key: 'calorie-estimation', label: 'Estimación de consumo de calorías', icon: Flame, ready: true },
  { key: 'plan', label: 'Plan semanal', icon: CalendarDays, ready: false },
  { key: 'foods', label: 'Mis alimentos', icon: Leaf, ready: false },
  { key: 'progress', label: 'Mi progreso', icon: Activity, ready: false },
] as const;

export function AppSidebar({ open, selectedKey, onClose, onSelect }: AppSidebarProps) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: { xs: 'min(320px, 88vw)', sm: 340 }, bgcolor: '#173d31', color: '#f8f6ee', p: 2.5 } } }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1.25, px: 0.5, mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: 3, bgcolor: '#d9e9d9', color: '#173d31' }}>
            <Leaf size={22} strokeWidth={2.4} />
          </Box>
          <Box>
            <Typography fontWeight={750} lineHeight={1.15}>Mi Nutricionista</Typography>
            <Typography variant="caption" sx={{ color: 'rgba(248,246,238,.65)' }}>tu diario de alimentación</Typography>
          </Box>
        </Box>
        <IconButton onClick={onClose} aria-label="Cerrar menú" sx={{ color: 'rgba(248,246,238,.75)' }}><X size={20} /></IconButton>
      </Box>

      <Typography variant="overline" sx={{ px: 1.5, mb: 1, color: 'rgba(248,246,238,.5)', letterSpacing: 1.1 }}>
        TU ESPACIO
      </Typography>
      <List disablePadding sx={{ display: 'grid', gap: 0.5 }}>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const selected = item.key === selectedKey;
          return (
            <ListItemButton
              key={item.key}
              disabled={!item.ready}
              selected={selected}
              onClick={() => {
                onSelect(item.key as NavigationKey);
                onClose();
              }}
              sx={{
                minHeight: 48,
                px: 1.5,
                color: selected ? '#173d31' : 'rgba(248,246,238,.78)',
                borderRadius: 2.5,
                '&.Mui-selected': { bgcolor: '#e3eee1', '&:hover': { bgcolor: '#e3eee1' } },
                '&.Mui-disabled': { color: 'rgba(248,246,238,.48)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: 'inherit' }}><Icon size={19} /></ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: selected ? 700 : 500, lineHeight: 1.35 }} />
              {!item.ready && <Chip label="Pronto" size="small" sx={{ height: 21, fontSize: 10, bgcolor: 'rgba(255,255,255,.1)', color: 'rgba(248,246,238,.6)' }} />}
            </ListItemButton>
          );
        })}
      </List>

      <Box sx={{ mt: 'auto', p: 2, borderRadius: 3, bgcolor: 'rgba(255,255,255,.08)' }}>
        <Sparkles size={18} color="#d8b983" />
        <Typography sx={{ mt: 1, fontWeight: 700, fontSize: 14 }}>A tu ritmo</Typography>
        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: 'rgba(248,246,238,.65)', lineHeight: 1.6 }}>
          Un espacio sencillo para conocer mejor tus hábitos, sin juicios.
        </Typography>
      </Box>
    </Drawer>
  );
}
