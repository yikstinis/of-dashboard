import { useCallback } from 'react';
import { Chart } from '@/components/chart';
import { Section } from '@/components/section';
import { Panel } from '@/components/panel';
import {
  SAMPLE_STATE,
  SAMPLE_TREND,
  SAMPLE_TREND_DOMAIN,
  SAMPLE_TREND_TICKS,
} from '@/constants/sample';
import { useI18n } from '@/hooks/use-i18n';
import type { DashboardSectionCommonComponent } from './dashboard-section-common.types';

// TODO: Would be nice to keep it with theme constants as layout size...
const DASHBOARD_CHART_HEIGHT = 245;

export const DashboardSectionCommon: DashboardSectionCommonComponent = () => {
  const i18n = useI18n();

  const formatAreaChartYAxisLabel = useCallback(
    (value: number) => {
      return [value, i18n.DASHBOARD_ELEMENT_TRAND_YAXIS_DIMENSION].join(' ');
    },
    [i18n]
  );

  return (
    <Section>
      <Section.Row>
        <Panel flexGrow={0.25}>
          <Panel.Header title={i18n.DASHBOARD_ELEMENT_STATE_TITLE} />

          <Chart.Pie height={DASHBOARD_CHART_HEIGHT} data={SAMPLE_STATE} />
        </Panel>

        <Panel flexGrow={0.75}>
          <Panel.Header title={i18n.DASHBOARD_ELEMENT_TREND_TITLE} />

          <Chart.Area
            height={DASHBOARD_CHART_HEIGHT}
            data={SAMPLE_TREND}
            domain={SAMPLE_TREND_DOMAIN}
            ticks={SAMPLE_TREND_TICKS}
            formatYAxisLabel={formatAreaChartYAxisLabel}
          />
        </Panel>
      </Section.Row>
    </Section>
  );
};
