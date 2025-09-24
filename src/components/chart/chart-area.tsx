import { useCallback } from 'react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';
import type { ChartAreaComponent } from './chart-area.types';

export const ChartArea: ChartAreaComponent = ({
  height,
  data,
  ticks,
  domain,
  formatYAxisLabel,
}) => {
  const formatYAxisLabelCallback = useCallback(
    (value: number) => {
      return formatYAxisLabel ? formatYAxisLabel(value) : value.toString();
    },
    [formatYAxisLabel]
  );

  // TODO: Wold be nice to have access to theme spacing constants here..
  return (
    <ResponsiveContainer width='100%' height={height}>
      <AreaChart
        data={data}
        margin={{
          top: 0,
          left: 24,
          right: 24,
          bottom: 24,
        }}
      >
        <defs>
          <linearGradient id='trendGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='0%'
              stopColor='var(--color-background-accent)'
              stopOpacity={0.3}
            />

            <stop
              offset='100%'
              stopColor='var(--color-background-accent)'
              stopOpacity={0.05}
            />
          </linearGradient>
        </defs>

        <CartesianGrid
          stroke='var(--color-border-secondary)'
          horizontal={true}
          vertical={true}
        />

        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 'var(--font-size-sm)',
            fill: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-family-base)',
          }}
          dy={10}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 'var(--font-size-sm)',
            fill: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-family-base)',
          }}
          ticks={ticks}
          tickFormatter={formatYAxisLabelCallback}
          domain={domain}
        />

        <Area
          type='monotone'
          dataKey='value'
          stroke='var(--color-background-accent)'
          strokeWidth={2}
          fill='url(#trendGradient)'
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
