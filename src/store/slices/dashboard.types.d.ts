export type VirtualMachine = {
  id: string;
  state: boolean;
  name: string;
  host: string;
  cpu: {
    total: number;
    used: number;
  };
  memory: {
    used: number;
    total: number;
  };
  uptime: number;
};

export type VirtualMachineCreatePayload = {
  name: string;
  cpu: number;
  memory: number;
};
