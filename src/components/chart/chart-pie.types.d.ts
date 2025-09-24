import type { FunctionComponent } from 'react';

export type ChartPieEntity = {
  key: string;
  value: number;
  color: string;
  label: string;
};
export type ChartPieFromatterEntry = {
  payload: ChartPieEntity;
};
export interface ChartPieProperties {
  height: number;
  data: ChartPieEntity[];
}
export type ChartPieComponent = FunctionComponent<ChartPieProperties>;
