import type { FunctionComponent } from 'react';

export type ChartAreaEntity = {
  date: string;
  value: number;
};
export interface ChartAreaProperties {
  height: number;
  data: ChartAreaEntity[];
  domain: [number, number];
  ticks: number[];
  formatYAxisLabel?(value: number): string;
}
export type ChartAreaComponent = FunctionComponent<ChartAreaProperties>;
