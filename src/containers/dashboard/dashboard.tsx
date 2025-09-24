import { Button } from '@/components/button';
import { Chart } from '@/components/chart';
import { Section } from '@/components/section';
import { Panel } from '@/components/panel';
import { Table } from '@/components/table';
import { Text } from '@/components/text';
import { Label } from '@/components/label';
import { formatUptime } from '@/helpers/format';
import { useDashboardVirtualMachines } from '@/store';
import type { DashboardComponent } from './dashboard.types';
import { useCallback } from 'react';
import { useI18n } from '@/hoohs/use-i18n';

const STATE_DATA = [
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

const TREND_DATA = [
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

// TODO: Would be nice to keep it with theme constants as layout size...
const DASHBOARD_CHART_HEIGHT = 245;

export const Dashboard: DashboardComponent = () => {
  const i18n = useI18n();
  const dashboardVirtualMachines = useDashboardVirtualMachines();

  const formatAreaChartYAxisLabel = useCallback(
    (value: number) => {
      return [value, i18n.DASHBOARD_ELEMENT_TRAND_YAXIS_DIMENSION].join(' ');
    },
    [i18n]
  );

  const handleCreateVirtualMachineButtonPress = useCallback(() => {
    // TODO: Implement creating a new virtual flow later..
  }, []);

  const formatStatusLabelType = useCallback(
    (state: boolean) => (state ? Label.Type.SUCCESS : Label.Type.FAILURE),
    []
  );

  const formatStatusLabelText = useCallback(
    (state: boolean) =>
      state
        ? i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_STATUS_SUCCESS_LABEL
        : i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_STATUS_FAILURE_LABEL,
    [i18n]
  );

  const formatCPU = useCallback(
    (used: number) =>
      `${used} ${i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_CPU_DIMENSION}`,
    [i18n]
  );

  const formatMemory = useCallback(
    (used: number) =>
      `${used} ${i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_MEMORY_DIMENSION}`,
    [i18n]
  );

  return (
    <>
      <Section>
        <Section.Row>
          <Panel flexGrow={0.25}>
            <Panel.Header title={i18n.DASHBOARD_ELEMENT_STATE_TITLE} />

            <Chart.Pie height={DASHBOARD_CHART_HEIGHT} data={STATE_DATA} />
          </Panel>

          <Panel flexGrow={0.75}>
            <Panel.Header title={i18n.DASHBOARD_ELEMENT_TREND_TITLE} />

            <Chart.Area
              height={DASHBOARD_CHART_HEIGHT}
              data={TREND_DATA}
              // TODO: Maybe domain and ticks should be calculated using data somehow?..
              domain={[0, 2000]}
              ticks={[0, 500, 1000, 1500, 2000]}
              formatYAxisLabel={formatAreaChartYAxisLabel}
            />
          </Panel>
        </Section.Row>
      </Section>

      <Section>
        <Section.Header title={i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_TITLE}>
          <Button
            leftIcon={Button.Icon.PLUS}
            label={i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_BUTTON_LABEL}
            onPress={handleCreateVirtualMachineButtonPress}
          />
        </Section.Header>

        <Table>
          <Table.Head>
            <Table.Cell spacing={Table.Cell.Spacing.COMPACT}>
              <Text color={Text.Color.SECONDARY} fontSize={Text.FontSize.SM}>
                {i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_ID_LABEL}
              </Text>
            </Table.Cell>

            <Table.Cell spacing={Table.Cell.Spacing.COMPACT}>
              <Text color={Text.Color.SECONDARY} fontSize={Text.FontSize.SM}>
                {i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_STATE_LABEL}
              </Text>
            </Table.Cell>

            <Table.Cell spacing={Table.Cell.Spacing.COMPACT}>
              <Text color={Text.Color.SECONDARY} fontSize={Text.FontSize.SM}>
                {i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_HOST_SERVER_LABEL}
              </Text>
            </Table.Cell>

            <Table.Cell spacing={Table.Cell.Spacing.COMPACT}>
              <Text color={Text.Color.SECONDARY} fontSize={Text.FontSize.SM}>
                {i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_CPU_LABEL}
              </Text>
            </Table.Cell>

            <Table.Cell spacing={Table.Cell.Spacing.COMPACT}>
              <Text color={Text.Color.SECONDARY} fontSize={Text.FontSize.SM}>
                {i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_MEMORY_LABEL}
              </Text>
            </Table.Cell>

            <Table.Cell spacing={Table.Cell.Spacing.COMPACT}>
              <Text color={Text.Color.SECONDARY} fontSize={Text.FontSize.SM}>
                {i18n.DASHBOARD_SECTION_VIRTUAL_MACHINES_UPTIME_LABEL}
              </Text>
            </Table.Cell>
          </Table.Head>

          <Table.Body>
            {dashboardVirtualMachines.map(virtualMachine => (
              <Table.Row key={virtualMachine.id}>
                <Table.Cell>
                  <Text
                    color={Text.Color.PRIMARY}
                    fontSize={Text.FontSize.BASE}
                  >
                    {virtualMachine.id}
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Label
                    type={formatStatusLabelType(virtualMachine.state)}
                    text={formatStatusLabelText(virtualMachine.state)}
                  />
                </Table.Cell>

                <Table.Cell>
                  <Text
                    color={Text.Color.PRIMARY}
                    fontSize={Text.FontSize.BASE}
                  >
                    {virtualMachine.host}
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text
                    color={Text.Color.PRIMARY}
                    fontSize={Text.FontSize.BASE}
                  >
                    {formatCPU(virtualMachine.cpu.used)}
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text
                    color={Text.Color.PRIMARY}
                    fontSize={Text.FontSize.BASE}
                  >
                    {formatMemory(virtualMachine.memory.used)}
                  </Text>
                </Table.Cell>

                <Table.Cell>
                  <Text
                    color={Text.Color.PRIMARY}
                    fontSize={Text.FontSize.BASE}
                  >
                    {formatUptime(virtualMachine.uptime)}
                  </Text>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Section>
    </>
  );
};
