export const SAMPLE_STATE = [
  {
    key: 'stopped',
    value: 4,
    color: 'rgba(220, 53, 69, 1)',
    label: 'Stopped',
  },
  {
    key: 'running',
    value: 12,
    color: 'rgba(69, 158, 116, 1)',
    label: 'Running',
  },
];

export const SAMPLE_TREND = [
  { date: '11/06', value: 0 },
  { date: '12/06', value: 300 },
  { date: '13/06', value: 250 },
  { date: '15/06', value: 400 },
  { date: '17/06', value: 800 },
  { date: '19/06', value: 600 },
  { date: '21/06', value: 1200 },
  { date: '23/06', value: 1500 },
  { date: '25/06', value: 1800 },
  { date: '27/06', value: 1400 },
];
export const SAMPLE_TREND_DOMAIN = [0, 2000] as [number, number];
export const SAMPLE_TREND_TICKS = [0, 500, 1000, 1500, 2000];
