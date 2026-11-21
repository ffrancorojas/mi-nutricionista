import type { ReactNode } from 'react';

export type SummaryTone = 'green' | 'peach' | 'lavender';

export interface SummaryCardProps {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
  tone: SummaryTone;
}
