import { useCallback } from 'react';
import { Button } from '@/components/button';
import { Table } from '@/components/table';
import { Text } from '@/components/text';
import { Label } from '@/components/label';
import { Section } from '@/components/section';
import { formatUptime } from '@/helpers/format';
import { useI18n } from '@/hooks/use-i18n';
import { useDashboardVirtualMachines } from '@/store';
import type { DashboardSectionVirtualMachinesComponent } from './dashboard-section-virtual-machines.types';

export const DashboardSectionVirtualMachines: DashboardSectionVirtualMachinesComponent =
  () => {
    const i18n = useI18n();

    const dashboardVirtualMachines = useDashboardVirtualMachines();

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
    );
  };
