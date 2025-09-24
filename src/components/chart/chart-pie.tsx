import { ResponsiveContainer, Pie, PieChart, Cell, Legend } from 'recharts';
import classes from './chart-pie.module.css';
import type {
  ChartPieComponent,
  ChartPieFromatterEntry,
} from './chart-pie.types';
import { useCallback } from 'react';

/**
 * This component may also have extra legend centered inisde pie.
 * Seems like there is no default solution for such interface from recharts.
 * TODO: Maybe this has to be a custom foreignObject or legend?..
 */
export const ChartPie: ChartPieComponent = ({ height, data }) => {
  const legendFormatter = useCallback(
    (_: number, entry: ChartPieFromatterEntry) => {
      return (
        <span className={classes.ChartPieLegendItem}>
          <span className={classes.ChartPieLegendLabelValue}>
            {entry.payload.value}
          </span>

          <span className={classes.ChartPieLegendLabel}>
            {entry.payload.label}
          </span>
        </span>
      );
    },
    []
  );

  return (
    <ResponsiveContainer width='100%' height={height}>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          dataKey='value'
          width={height}
          height={height}
        >
          {data.map(entry => (
            <Cell key={entry.key} fill={entry.color} />
          ))}
        </Pie>

        <Legend
          layout='vertical'
          align='right'
          verticalAlign='middle'
          formatter={
            // TODO: Looks like some types error inside package..
            legendFormatter as (
              value: unknown,
              entry: unknown
            ) => React.ReactNode
          }
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
