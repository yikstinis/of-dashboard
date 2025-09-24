import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export const useDashboardVirtualMachines = () =>
  useSelector((state: RootState) => state.dashboard.virtualMachines);
