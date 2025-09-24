export const formatUptime = (uptime: number) => {
  const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
  const date = new Date(uptime);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  return [days, hours, minutes, seconds].join(':');
};
