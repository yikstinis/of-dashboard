import { DashboardSectionCommon } from '@/containers/dashboard-section-common';
import { DashboardSectionVirtualMachines } from '@/containers/dashboard-section-virtual-machines';
import type { DashboardComponent } from './dashboard.types';

export const Dashboard: DashboardComponent = () => {
  return (
    <>
      <DashboardSectionCommon />
      <DashboardSectionVirtualMachines />
    </>
  );
};
