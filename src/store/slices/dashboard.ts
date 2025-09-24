import { faker } from '@faker-js/faker';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  VirtualMachine,
  VirtualMachineCreatePayload,
} from './dashboard.types';

interface DashboardState {
  virtualMachines: Array<VirtualMachine>;
}

const initialState: DashboardState = {
  virtualMachines: [
    generateFakeVirtualMachine(),
    generateFakeVirtualMachine(),
    generateFakeVirtualMachine(),
  ],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    createVirtualMachine(
      state,
      action: PayloadAction<VirtualMachineCreatePayload>
    ) {
      const fakeVirtualMachine = generateFakeVirtualMachine();
      state.virtualMachines.push({
        ...fakeVirtualMachine,
        name: action.payload.name,
        cpu: {
          total: action.payload.cpu,
          used: fakeVirtualMachine.cpu.used,
        },
        memory: {
          total: action.payload.memory,
          used: fakeVirtualMachine.memory.used,
        },
      });
    },
  },
});

export default dashboardSlice.reducer;
export const { createVirtualMachine } = dashboardSlice.actions;

function generateFakeVirtualMachine() {
  return {
    id: faker.string.uuid(),
    name: faker.system.fileName(),
    state: faker.datatype.boolean(),
    host: faker.internet.domainName(),
    cpu: {
      total: faker.number.int({
        min: 8,
        max: 12,
      }),
      used: faker.number.int({
        min: 2,
        max: 6,
      }),
    },
    memory: {
      total: faker.number.int({
        min: 45,
        max: 50,
      }),
      used: faker.number.int({
        min: 15,
        max: 30,
      }),
    },
    uptime: faker.number.int({
      max: 1000 * 60 * 60 * 24 * 365,
    }),
  };
}
