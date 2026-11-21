import { Box, Paper, Stack, Typography } from '@mui/material';
import type { SummaryCardProps, SummaryTone } from './SummaryCard.types';

const toneStyles: Record<SummaryTone, { background: string; foreground: string }> = {
  green: { background: '#e5efe6', foreground: '#315d45' },
  peach: { background: '#f8e8dc', foreground: '#a7653f' },
  lavender: { background: '#eee9f4', foreground: '#6f5c83' },
};

export function SummaryCard({ label, value, detail, icon, tone }: SummaryCardProps) {
  const colors = toneStyles[tone];
  return (
    <Paper elevation={0} sx={{ flex: 1, minWidth: 190, p: 2.25, border: '1px solid', borderColor: 'divider', borderRadius: 3.5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
        <Typography variant="body2" color="text.secondary" fontWeight={550}>{label}</Typography>
        <Box sx={{ width: 36, height: 36, display: 'grid', placeItems: 'center', borderRadius: 2.25, color: colors.foreground, bgcolor: colors.background }}>
          {icon}
        </Box>
      </Stack>
      <Typography variant="h4" fontWeight={750} letterSpacing="-.04em" sx={{ mt: 1.5 }}>{value}</Typography>
      <Typography variant="caption" color="text.secondary">{detail}</Typography>
    </Paper>
  );
}
